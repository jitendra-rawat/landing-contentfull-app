# Contentful Setup Guide

This guide will help you set up Contentful to work with your updated frontend app.

## 🎯 **Content Type Setup**

### **Step 1: Create Landing Page Content Type**

In your Contentful space, create a new content type called **"Landing Page"** with these fields:

| Field Name | Field ID | Type | Required | Widget |
|------------|----------|------|----------|---------|
| Title | `title` | Short text | ✅ Yes | - |
| Slug | `slug` | Short text | ✅ Yes | - |
| Layout Configuration | `layoutConfig` | Object | ❌ No | Your App |
| SEO Title | `seoTitle` | Short text | ❌ No | - |
| SEO Description | `seoDescription` | Long text | ❌ No | - |
| SEO Image | `seoImage` | Media | ❌ No | - |

### **Step 2: Configure the Layout Field**

For the **"Layout Configuration"** field:

```json
{
  "id": "layoutConfig",
  "name": "Layout Configuration",
  "type": "Object",
  "required": false,
  "widgetId": "5uMF9vbxAHC29sHFQkVi9N"
}
```

**Important**: The `widgetId` must match your app's ID from `contentful-app.json`.

## 🔧 **Environment Variables**

Make sure your `.env.local` file has the correct Contentful credentials:

```bash
# Contentful Configuration
CONTENTFUL_SPACE_ID=your_space_id_here
CONTENTFUL_ACCESS_TOKEN=your_content_delivery_api_key_here
CONTENTFUL_PREVIEW_TOKEN=your_preview_token_here
CONTENTFUL_ENVIRONMENT=master

# Next.js Configuration
NEXT_PUBLIC_SITE_URL=http://localhost:3000
NEXT_PUBLIC_CONTENTFUL_SPACE_ID=your_space_id_here
NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN=your_content_delivery_api_key_here
```

## 📊 **Expected JSON Structure**

Your Layout Editor app should send this JSON structure to Contentful:

```json
{
  "components": [
    {
      "id": "hero-1703123456789",
      "type": "HeroBlock",
      "name": "Hero Block"
    },
    {
      "id": "twoColumn-1703123456790", 
      "type": "TwoColumnRow",
      "name": "Two Column Row"
    },
    {
      "id": "imageGrid-1703123456791",
      "type": "ImageGrid", 
      "name": "2x2 Image Grid"
    }
  ],
  "lastModified": "2024-01-15T10:30:00.000Z",
  "version": "1.0"
}
```

## 🚀 **Testing the Integration**

### **Step 1: Create Test Content**

1. **In Contentful**, create a new Landing Page entry
2. **Fill in Title and Slug** (e.g., "Homepage", "homepage")
3. **Click the Layout Configuration field**
4. **Add some components** using your app
5. **Save the layout**

### **Step 2: Test Your App**

1. **Start your Next.js app**: `npm run dev`
2. **Visit the test page**: `http://localhost:3000/test`
3. **Check the data**: You should see the JSON structure and rendered components

### **Step 3: Test Dynamic Pages**

1. **Visit a landing page**: `http://localhost:3000/landing/homepage`
2. **Verify components render**: You should see your components displayed

## 🔍 **API Endpoints**

Your app now provides these API endpoints:

- `GET /api/pages` - Get all pages and landing pages
- `GET /api/pages/[slug]` - Get a specific page by slug
- `GET /api/landing-pages` - Get all landing pages
- `GET /api/landing-pages/[slug]` - Get a specific landing page by slug

## 🎨 **Component Types**

The app now supports these component types:

- `HeroBlock` - Hero section component
- `TwoColumnRow` - Two-column layout component  
- `ImageGrid` - 2x2 image grid component

## 🚨 **Troubleshooting**

### **Issue 1: No Data Found**
- **Check**: Content type name is exactly "landingPage"
- **Check**: API key has proper permissions
- **Check**: Environment variables are set correctly

### **Issue 2: Components Not Rendering**
- **Check**: Component types match exactly (HeroBlock, TwoColumnRow, ImageGrid)
- **Check**: JSON structure includes required fields (id, type, name)

### **Issue 3: API Errors**
- **Check**: Contentful space ID and access token
- **Check**: Network connectivity to Contentful
- **Check**: Content type exists in your space

## 📝 **Next Steps**

1. **Create content** in Contentful using the Landing Page content type
2. **Test the integration** using the test page
3. **Customize components** as needed for your specific use case
4. **Add more component types** if required

Your app is now configured to correctly fetch and display data from Contentful CMS! 