# Contentful Landing Page Builder - Frontend

A Next.js frontend application that fetches and renders dynamic landing pages from Contentful CMS. This frontend works with the custom Contentful App that allows visual drag-and-drop layout building.

## 🚀 Features

- **Dynamic Content Rendering**: Fetches layout data from Contentful and renders components dynamically
- **Component System**: Supports Hero blocks, Two-column layouts, and Image grids
- **Responsive Design**: All components are fully responsive
- **TypeScript**: Full type safety with comprehensive type definitions
- **API Routes**: RESTful API endpoints for testing and integration
- **Error Handling**: Graceful error handling for missing content or connection issues

## 📋 Prerequisites

1. **Contentful Space**: You need a Contentful space with:
   - A content type called "page" with fields:
     - `title` (Text)
     - `slug` (Text)
     - `layoutConfig` (JSON Object)
     - `seoTitle` (Text, optional)
     - `seoDescription` (Text, optional)
     - `seoImage` (Media, optional)

2. **Contentful App**: The custom Contentful App should be installed and configured to save layout data to the `layoutConfig` field.

## 🛠️ Setup Instructions

### 1. Clone and Install Dependencies

```bash
git clone <your-repo-url>
cd frontend-contentful
npm install
```

### 2. Environment Configuration

Create a `.env.local` file in the root directory:

```env
# Contentful Configuration
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id_here
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_access_token_here
NEXT_PUBLIC_CONTENTFUL_ENVIRONMENT=master

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
```

### 3. Get Contentful Credentials

1. Go to your Contentful space
2. Navigate to **Settings** → **API keys**
3. Create a new API key or use an existing one
4. Copy the **Space ID** and **Content Delivery API - access token**

### 4. Run the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

## 🧪 Testing the Integration

### 1. Test Page

Visit `/test` to verify your Contentful connection:
- Shows connection status
- Lists all available pages
- Displays component counts
- Provides direct links to view pages

### 2. API Endpoints

Test the API endpoints directly:

- **GET `/api/pages`** - List all pages
- **GET `/api/pages/[slug]`** - Get specific page data

### 3. View Pages

- **Static Routes**: `/landing/page-1` and `/landing/page-2`
- **Dynamic Routes**: `/landing/[slug]` - works with any page slug from Contentful

## 📁 Project Structure

```
src/
├── app/
│   ├── api/                    # API routes
│   │   └── pages/
│   ├── landing/                # Landing pages
│   │   ├── page-1/
│   │   ├── page-2/
│   │   └── [slug]/             # Dynamic routes
│   ├── test/                   # Integration test page
│   └── globals.css
├── components/
│   ├── ComponentRenderer.tsx   # Dynamic component rendering
│   ├── HeroBlock.tsx          # Hero component
│   ├── TwoColumnBlock.tsx     # Two-column component
│   └── ImageGridBlock.tsx     # Image grid component
├── lib/
│   └── contentful.ts          # Contentful client
└── types/
    └── index.ts               # TypeScript definitions
```

## 🔧 Contentful Data Structure

The `layoutConfig` field should contain a JSON object with this structure:

```json
{
  "components": [
    {
      "id": "hero-1",
      "type": "hero",
      "heading": "Welcome to Our Site",
      "subtitle": "Discover amazing content",
      "ctaText": "Get Started",
      "ctaLink": "/",
      "backgroundImage": {
        "sys": { "id": "asset-id", "type": "Asset" },
        "fields": {
          "title": "Background Image",
          "file": {
            "url": "https://...",
            "details": { "size": 0 },
            "fileName": "image.jpg",
            "contentType": "image/jpeg"
          }
        }
      }
    }
  ],
  "version": "1.0",
  "lastModified": "2024-01-01T00:00:00.000Z"
}
```

## 🎨 Component Types

### Hero Block
- Heading, subtitle, CTA button
- Optional background image
- Full-width responsive design

### Two Column Block
- Text content on the left
- Image on the right
- CTA button integration

### Image Grid Block
- 2x2 image grid layout
- Optional title
- Hover effects and responsive design

## 🚀 Deployment

### Vercel (Recommended)

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy

### Other Platforms

The app can be deployed to any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🔍 Troubleshooting

### Common Issues

1. **"Page Not Found" Error**
   - Verify the page exists in Contentful with the correct slug
   - Check that `layoutConfig` field contains valid JSON
   - Ensure environment variables are set correctly

2. **Connection Errors**
   - Verify Space ID and Access Token
   - Check Contentful API rate limits
   - Ensure the content type is named "page"

3. **Component Not Rendering**
   - Check component type matches supported types
   - Verify component data structure
   - Check browser console for errors

### Debug Steps

1. Visit `/test` to check connection
2. Use browser dev tools to inspect network requests
3. Check Contentful web app for data structure
4. Verify environment variables are loaded

## 📚 API Reference

### ContentfulClient Methods

```typescript
// Get all pages
const pages = await contentfulClient.getPages();

// Get specific page by slug
const page = await contentfulClient.getLandingPage('page-slug');

// Get page with GraphQL (alternative)
const page = await contentfulClient.getPageGraphQL('page-slug');
```

### Component Interface

```typescript
interface Component {
  id: string;
  type: 'hero' | 'twoColumn' | 'imageGrid';
  // ... component-specific fields
}
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Add tests if applicable
5. Submit a pull request

## 📄 License

This project is licensed under the MIT License.

## 🆘 Support

If you encounter any issues:

1. Check the troubleshooting section
2. Visit `/test` to verify your setup
3. Check the browser console for errors
4. Verify your Contentful configuration

For additional help, please open an issue in the repository. 