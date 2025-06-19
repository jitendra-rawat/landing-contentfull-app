import React from 'react';
import { contentfulClient } from '@/lib/contentful';
import Navigation from '@/components/Navigation';
import ComponentRenderer from '@/components/ComponentRenderer';
import './TestPage.css';

export default async function TestPage() {
  try {
    // Test fetching a landing page (you'll need to create this in Contentful)
    const testSlug = 'page-1'; // Changed to match your Contentful entry
    const pageData = await contentfulClient.getLandingPage(testSlug);
    
    // Also fetch all landing pages
    const allLandingPages = await contentfulClient.getLandingPages();

    return (
      <>
        <Navigation />
        
        <main className="test-page">
          <div className="container">
            <h1>Contentful Data Test</h1>
            <p className="note">
              <strong>Note:</strong> This test is using the slug <code>{testSlug}</code>. 
              Change this in <code>src/app/test/page.tsx</code> if you want to test a different entry.
            </p>
            
            <section className="test-section">
              <h2>All Landing Pages</h2>
              <pre className="data-display">
                {JSON.stringify(allLandingPages, null, 2)}
              </pre>
            </section>

            <section className="test-section">
              <h2>Specific Landing Page: {testSlug}</h2>
              {pageData ? (
                <>
                  <div className="page-info">
                    <h3>{pageData.title}</h3>
                    <p>Slug: {pageData.slug}</p>
                    <p>Version: {pageData.version}</p>
                    <p>Last Modified: {new Date(pageData.lastModified).toLocaleString()}</p>
                    <p>Components: {pageData.layout?.length || 0}</p>
                  </div>
                  
                  <div className="components-preview">
                    <h3>Components Preview</h3>
                    <ComponentRenderer components={pageData.layout || []} />
                  </div>
                  
                  <div className="raw-data">
                    <h3>Raw Data</h3>
                    <pre className="data-display">
                      {JSON.stringify(pageData, null, 2)}
                    </pre>
                  </div>
                </>
              ) : (
                <div className="error-message">
                  <p>No landing page found with slug: {testSlug}</p>
                  <p>Please create a landing page in Contentful with this slug, or change the testSlug in this file.</p>
                </div>
              )}
            </section>
          </div>
        </main>
      </>
    );
  } catch (error) {
    console.error('Error loading test page:', error);
    
    return (
      <>
        <Navigation />
        <main className="test-page">
          <div className="container">
            <div className="error-message">
              <h1>Error Loading Test Page</h1>
              <p>There was an error loading the Contentful data:</p>
              <pre className="error-details">
                {error instanceof Error ? error.message : 'Unknown error occurred'}
              </pre>
            </div>
          </div>
        </main>
      </>
    );
  }
}