import { GraphQLClient } from 'graphql-request';
import { createClient, ContentfulClientApi } from 'contentful';
import { 
  ContentfulPage, 
  ContentfulLandingPage,
  PagesQueryResponse, 
  LandingPagesQueryResponse,
  LayoutConfig,
  Component 
} from '@/types';

const CONTENTFUL_ENDPOINT = 'https://graphql.contentful.com/content/v1/spaces';

// Type guard for LayoutConfiguration
function isLayoutConfig(obj: any): obj is LayoutConfig {
  return (
    obj &&
    typeof obj === 'object' &&
    Array.isArray(obj.components) &&
    typeof obj.version === 'string' &&
    typeof obj.lastModified === 'string'
  );
}

// Type guard for ContentfulAsset
function isContentfulAsset(obj: any): obj is import('@/types').ContentfulAsset {
  return (
    obj &&
    typeof obj === 'object' &&
    obj.sys && typeof obj.sys.id === 'string' && obj.sys.type === 'Asset' &&
    obj.fields && typeof obj.fields.title === 'string' && obj.fields.file
  );
}

class ContentfulClient {
  private graphqlClient: GraphQLClient;
  private restClient: ContentfulClientApi<any>;

  constructor(spaceId: string, accessToken: string) {
    this.graphqlClient = new GraphQLClient(`${CONTENTFUL_ENDPOINT}/${spaceId}`, {
      headers: {
        authorization: `Bearer ${accessToken}`,
      },
    });

    this.restClient = createClient({
      space: spaceId,
      accessToken: accessToken,
    });
  }

  // Fetch all landing pages using REST API
  async getLandingPages(): Promise<ContentfulLandingPage[]> {
    try {
      const response = await this.restClient.getEntries({
        content_type: 'landingPage',
        include: 2,
      });

      return response.items.map((item: any) => ({
        sys: {
          id: typeof item.sys.id === 'string' ? item.sys.id : '',
          type: typeof item.sys.type === 'string' ? item.sys.type : 'Entry',
        },
        fields: {
          title: typeof item.fields.title === 'string' ? item.fields.title : '',
          slug: typeof item.fields.slug === 'string' ? item.fields.slug : '',
          layoutConfig: isLayoutConfig(item.fields.layoutConfig)
            ? item.fields.layoutConfig
            : undefined,
          seoTitle: typeof item.fields.seoTitle === 'string' ? item.fields.seoTitle : undefined,
          seoDescription: typeof item.fields.seoDescription === 'string' ? item.fields.seoDescription : undefined,
          seoImage: isContentfulAsset(item.fields.seoImage) ? item.fields.seoImage : undefined,
        },
      }));
    } catch (error) {
      console.error('Error fetching landing pages:', error);
      return [];
    }
  }

  // Fetch a specific landing page by slug using REST API
  async getLandingPage(slug: string): Promise<{
    title: string;
    slug: string;
    layout: Component[];
    lastModified: string;
    version: string;
  } | null> {
    try {
      const response = await this.restClient.getEntries({
        content_type: 'landingPage',
        'fields.slug': slug,
        include: 2,
      });

      if (response.items.length > 0) {
        const page = response.items[0];
        const layoutConfig = isLayoutConfig(page.fields.layoutConfig)
          ? page.fields.layoutConfig
          : { components: [], version: '1.0', lastModified: new Date().toISOString() };
        
        return {
          title: typeof page.fields.title === 'string' ? page.fields.title : '',
          slug: typeof page.fields.slug === 'string' ? page.fields.slug : '',
          layout: layoutConfig.components || [],
          lastModified: layoutConfig.lastModified,
          version: layoutConfig.version
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching landing page:', error);
      return null;
    }
  }

  // Fetch all pages using REST API (keeping for backward compatibility)
  async getPages(): Promise<ContentfulPage[]> {
    try {
      const response = await this.restClient.getEntries({
        content_type: 'page',
        include: 2,
      });

      return response.items.map((item: any) => ({
        sys: {
          id: typeof item.sys.id === 'string' ? item.sys.id : '',
          type: typeof item.sys.type === 'string' ? item.sys.type : 'Entry',
        },
        fields: {
          title: typeof item.fields.title === 'string' ? item.fields.title : '',
          slug: typeof item.fields.slug === 'string' ? item.fields.slug : '',
          layoutConfig: isLayoutConfig(item.fields.layoutConfig)
            ? item.fields.layoutConfig
            : { components: [], version: '1.0', lastModified: new Date().toISOString() },
          seoTitle: typeof item.fields.seoTitle === 'string' ? item.fields.seoTitle : undefined,
          seoDescription: typeof item.fields.seoDescription === 'string' ? item.fields.seoDescription : undefined,
          seoImage: isContentfulAsset(item.fields.seoImage) ? item.fields.seoImage : undefined,
        },
      }));
    } catch (error) {
      console.error('Error fetching pages:', error);
      return [];
    }
  }

  // Fetch a specific page by slug using REST API (keeping for backward compatibility)
  async getPage(slug: string): Promise<ContentfulPage | null> {
    try {
      const response = await this.restClient.getEntries({
        content_type: 'page',
        'fields.slug': slug,
        include: 2,
      });

      if (response.items.length > 0) {
        const item = response.items[0];
        return {
          sys: {
            id: item.sys.id,
            type: item.sys.type,
          },
          fields: {
            title: typeof item.fields.title === 'string' ? item.fields.title : '',
            slug: typeof item.fields.slug === 'string' ? item.fields.slug : '',
            layoutConfig: isLayoutConfig(item.fields.layoutConfig)
              ? item.fields.layoutConfig
              : { components: [], version: '1.0', lastModified: new Date().toISOString() },
            seoTitle: typeof item.fields.seoTitle === 'string' ? item.fields.seoTitle : undefined,
            seoDescription: typeof item.fields.seoDescription === 'string' ? item.fields.seoDescription : undefined,
            seoImage: isContentfulAsset(item.fields.seoImage) ? item.fields.seoImage : undefined,
          },
        };
      }
      
      return null;
    } catch (error) {
      console.error('Error fetching page:', error);
      return null;
    }
  }

  // GraphQL method for getting landing pages
  async getLandingPagesGraphQL(): Promise<ContentfulLandingPage[]> {
    const query = `
      query GetLandingPages {
        landingPageCollection {
          items {
            sys {
              id
              type
            }
            fields {
              title
              slug
              layoutConfig
              seoTitle
              seoDescription
              seoImage {
                sys {
                  id
                  type
                }
                fields {
                  title
                  file {
                    url
                    details {
                      size
                      image {
                        width
                        height
                      }
                    }
                    fileName
                    contentType
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await this.graphqlClient.request<LandingPagesQueryResponse>(query);
      return response.landingPageCollection.items;
    } catch (error) {
      console.error('Error fetching landing pages via GraphQL:', error);
      return [];
    }
  }

  // GraphQL method for getting pages (keeping existing functionality)
  async getPagesGraphQL(): Promise<ContentfulPage[]> {
    const query = `
      query GetPages {
        pageCollection {
          items {
            sys {
              id
              type
            }
            fields {
              title
              slug
              layoutConfig
              seoTitle
              seoDescription
              seoImage {
                sys {
                  id
                  type
                }
                fields {
                  title
                  file {
                    url
                    details {
                      size
                      image {
                        width
                        height
                      }
                    }
                    fileName
                    contentType
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await this.graphqlClient.request<PagesQueryResponse>(query);
      return response.pageCollection.items;
    } catch (error) {
      console.error('Error fetching pages via GraphQL:', error);
      return [];
    }
  }

  // GraphQL method for getting a specific landing page
  async getLandingPageGraphQL(slug: string): Promise<ContentfulLandingPage | null> {
    const query = `
      query GetLandingPage($slug: String!) {
        landingPageCollection(where: { slug: $slug }, limit: 1) {
          items {
            sys {
              id
              type
            }
            fields {
              title
              slug
              layoutConfig
              seoTitle
              seoDescription
              seoImage {
                sys {
                  id
                  type
                }
                fields {
                  title
                  file {
                    url
                    details {
                      size
                      image {
                        width
                        height
                      }
                    }
                    fileName
                    contentType
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await this.graphqlClient.request<LandingPagesQueryResponse>(query, { slug });
      return response.landingPageCollection.items[0] || null;
    } catch (error) {
      console.error('Error fetching landing page via GraphQL:', error);
      return null;
    }
  }

  // GraphQL method for getting a specific page (keeping existing functionality)
  async getPageGraphQL(slug: string): Promise<ContentfulPage | null> {
    const query = `
      query GetPage($slug: String!) {
        pageCollection(where: { slug: $slug }, limit: 1) {
          items {
            sys {
              id
              type
            }
            fields {
              title
              slug
              layoutConfig
              seoTitle
              seoDescription
              seoImage {
                sys {
                  id
                  type
                }
                fields {
                  title
                  file {
                    url
                    details {
                      size
                      image {
                        width
                        height
                      }
                    }
                    fileName
                    contentType
                  }
                }
              }
            }
          }
        }
      }
    `;

    try {
      const response = await this.graphqlClient.request<PagesQueryResponse>(query, { slug });
      return response.pageCollection.items[0] || null;
    } catch (error) {
      console.error('Error fetching page via GraphQL:', error);
      return null;
    }
  }

  // Update layout config for landing page
  async updateLandingPageLayoutConfig(entryId: string, layoutConfig: LayoutConfig): Promise<boolean> {
    try {
      // Note: This would require the Contentful Management API
      // For now, we'll log the update and return success
      console.log('Updating landing page layout config for entry:', entryId, layoutConfig);
      return true;
    } catch (error) {
      console.error('Error updating landing page layout config:', error);
      return false;
    }
  }

  // Update layout config (keeping for backward compatibility)
  async updateLayoutConfig(entryId: string, layoutConfig: LayoutConfig): Promise<boolean> {
    try {
      // Note: This would require the Contentful Management API
      // For now, we'll log the update and return success
      console.log('Updating layout config for entry:', entryId, layoutConfig);
      return true;
    } catch (error) {
      console.error('Error updating layout config:', error);
      return false;
    }
  }
}

// Create singleton instance
const spaceId = process.env.NEXT_PUBLIC_CONTENTFUL_SPACE_ID || '';
const accessToken = process.env.NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN || '';

export const contentfulClient = new ContentfulClient(spaceId, accessToken);

// Helper function to generate component ID
export const generateComponentId = (type: string): string => {
  const timestamp = Date.now();
  const randomSuffix = Math.random().toString(36).substring(2, 8);
  return `${type.toLowerCase()}-${timestamp}-${randomSuffix}`;
};

// Helper function to create default components
export const createDefaultComponent = (type: string): Component => {
  const id = generateComponentId(type);
  
  switch (type) {
    case 'HeroBlock':
      return {
        id,
        type: 'HeroBlock',
        name: 'Hero Block',
        heading: 'Welcome to Our Site',
        subtitle: 'Discover amazing content and features',
        ctaText: 'Get Started',
        ctaLink: '/get-started'
      };
    case 'TwoColumnRow':
      return {
        id,
        type: 'TwoColumnRow',
        name: 'Two Column Row',
        leftHeading: 'Left Column',
        leftSubtitle: 'This is the left column content',
        leftCtaText: 'Learn More',
        leftCtaLink: '/learn-more'
      };
    case 'ImageGrid':
      return {
        id,
        type: 'ImageGrid',
        name: '2x2 Image Grid',
        title: 'Image Gallery',
        images: []
      };
    default:
      throw new Error(`Unknown component type: ${type}`);
  }
}; 