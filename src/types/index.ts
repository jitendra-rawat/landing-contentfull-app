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

// Component Types - Updated to match Contentful JSON structure
export type ComponentType = 'HeroBlock' | 'TwoColumnRow' | 'ImageGrid';

export interface BaseComponent {
  id: string;
  type: ComponentType;
  name: string;
}

// Updated component interfaces to match Contentful structure
export interface HeroComponent extends BaseComponent {
  type: 'HeroBlock';
  name: string;
  // Add any specific fields that might be stored in Contentful
  heading?: string;
  subtitle?: string;
  ctaText?: string;
  ctaLink?: string;
  backgroundImage?: ContentfulAsset;
}

export interface TwoColumnComponent extends BaseComponent {
  type: 'TwoColumnRow';
  name: string;
  // Add any specific fields that might be stored in Contentful
  leftHeading?: string;
  leftSubtitle?: string;
  leftCtaText?: string;
  leftCtaLink?: string;
  rightImage?: ContentfulAsset;
}

export interface ImageGridComponent extends BaseComponent {
  type: 'ImageGrid';
  name: string;
  // Add any specific fields that might be stored in Contentful
  images?: ContentfulAsset[];
  title?: string;
}

export type Component = HeroComponent | TwoColumnComponent | ImageGridComponent;

// Layout Configuration - Updated to match Contentful JSON structure
export interface LayoutConfig {
  components: Component[];
  version: string;
  lastModified: string;
}

// Contentful Landing Page Entry - Updated to use 'layoutConfig' field
export interface ContentfulLandingPage {
  sys: {
    id: string;
    type: 'Entry';
  };
  fields: {
    title: string;
    slug: string;
    layoutConfig?: LayoutConfig;
    seoTitle?: string;
    seoDescription?: string;
    seoImage?: ContentfulAsset;
  };
}

// Keep the old ContentfulPage for backward compatibility
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
  errors?: unknown[];
}

export interface PagesQueryResponse {
  pageCollection: {
    items: ContentfulPage[];
  };
}

export interface LandingPagesQueryResponse {
  landingPageCollection: {
    items: ContentfulLandingPage[];
  };
}

export interface PageQueryResponse {
  page: ContentfulPage;
}

export interface LandingPageQueryResponse {
  landingPage: ContentfulLandingPage;
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
  [key: string]: unknown;
} 