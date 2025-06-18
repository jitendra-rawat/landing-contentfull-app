import React from 'react';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import { contentfulClient } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'Contentful Test - Verify Integration',
  description: 'Test page to verify Contentful integration',
};

export default async function TestPage() {
  let pages: any[] = [];
  let error: string | null = null;

  try {
    pages = await contentfulClient.getPages();
  } catch (err) {
    error = err instanceof Error ? err.message : 'Unknown error occurred';
  }

  return (
    <>
      <Navigation />
      
      <main>
        <div className="container">
          <div className="page-header">
            <h1>Contentful Integration Test</h1>
            <p>Testing connection to Contentful CMS</p>
          </div>

          {error ? (
            <div className="error-state">
              <h2>Connection Error</h2>
              <p>Failed to connect to Contentful:</p>
              <p><strong>{error}</strong></p>
              <p>Please check your environment variables:</p>
              <ul>
                <li>NEXT_PUBLIC_CONTENTFUL_SPACE_ID</li>
                <li>NEXT_PUBLIC_CONTENTFUL_ACCESS_TOKEN</li>
              </ul>
            </div>
          ) : (
            <div className="success-state">
              <h2>✅ Connection Successful!</h2>
              <p>Found {pages.length} page(s) in Contentful:</p>
              
              {pages.length > 0 ? (
                <div className="pages-list">
                  {pages.map((page) => (
                    <div key={page.sys.id} className="page-item">
                      <h3>{page.fields.title}</h3>
                      <p><strong>Slug:</strong> {page.fields.slug}</p>
                      <p><strong>Components:</strong> {page.fields.layoutConfig?.components?.length || 0}</p>
                      <a href={`/landing/${page.fields.slug}`} className="btn btn-primary">
                        View Page
                      </a>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="empty-state">
                  <h3>No Pages Found</h3>
                  <p>No pages have been created in Contentful yet.</p>
                  <p>Create a page entry with content type &quot;page&quot; and add some components to see them here.</p>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </>
  );
} 
 