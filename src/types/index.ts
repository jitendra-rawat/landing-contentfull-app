// Contentful Entry Types
export interface ContentfulAsset {
  sys: {
    id: string;
    type: 'Asset';
  };
  fields: {
    title: string;
    description?: string;
    file: {
      url: string;
      details: {
        size: number;
        image?: {
          width: number;
          height: number;
        };
      };
      fileName: string;
      contentType: string;
    };
  };
}

export interface ContentfulEntry {
  sys: {
    id: string;
    type: 'Entry';
    contentType: {
      sys: {
        id: string;
        type: 'Link';
        linkType: 'ContentType';
      };
    };
  };
  fields: Record<string, unknown>;
}

// Component Types
export type ComponentType = 'hero' | 'twoColumn' | 'imageGrid';

export interface BaseComponent {
  id: string;
  type: ComponentType;
}

export interface HeroComponent extends BaseComponent {
  type: 'hero';
  heading: string;
  subtitle: string;
  ctaText: string;
  ctaLink: string;
  backgroundImage?: ContentfulAsset;
}

export interface TwoColumnComponent extends BaseComponent {
  type: 'twoColumn';
  leftHeading: string;
  leftSubtitle: string;
  leftCtaText: string;
  leftCtaLink: string;
  rightImage: ContentfulAsset;
}

export interface ImageGridComponent extends BaseComponent {
  type: 'imageGrid';
  images: ContentfulAsset[];
  title?: string;
}

export type Component = HeroComponent | TwoColumnComponent | ImageGridComponent;

// Layout Configuration
export interface LayoutConfig {
  components: Component[];
  version: string;
  lastModified: string;
}

// Contentful Page Entry
export interface ContentfulPage {
  sys: {
    id: string;
    type: 'Entry';
  };
  fields: {
    title: string;
    slug: string;
    layoutConfig: LayoutConfig;
    seoTitle?: string;
    seoDescription?: string;
    seoImage?: ContentfulAsset;
  };
}

// Redux State Types
export interface LayoutState {
  components: Component[];
  history: Component[][];
  historyIndex: number;
  isDirty: boolean;
  isSaving: boolean;
  lastSaved: string | null;
}

export interface RootState {
  layout: LayoutState;
}

// GraphQL Response Types
export interface GraphQLResponse<T> {
  data: T;
  errors?: any[];
}

export interface PagesQueryResponse {
  pageCollection: {
    items: ContentfulPage[];
  };
}

export interface PageQueryResponse {
  page: ContentfulPage;
}

// App Configuration
export interface AppConfig {
  spaceId: string;
  accessToken: string;
  environment: string;
  previewToken?: string;
}

// SEO Types
export interface PageMetadata {
  title: string;
  description: string;
  image?: string;
  url: string;
}

export interface StructuredData {
  '@context': string;
  '@type': string;
  [key: string]: any;
} 