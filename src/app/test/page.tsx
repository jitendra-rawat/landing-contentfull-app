"use client"
import React from 'react';
import { contentfulClient } from '@/lib/contentful';
import Navigation from '@/components/Navigation';
import ComponentRenderer from '@/components/ComponentRenderer';

export default async function TestPage() {
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
          <p style={{ color: '#888', fontSize: '1rem' }}>
            <strong>Note:</strong> This test is using the slug <code>{testSlug}</code>. Change this in <code>src/app/test/page.tsx</code> if you want to test a different entry.
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
                  <p>Components: {pageData.layout.length}</p>
                </div>
                
                <div className="components-preview">
                  <h3>Components Preview</h3>
                  <ComponentRenderer components={pageData.layout} />
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
                <p>No landing page found with slug: "{testSlug}"</p>
                <p>Please create a landing page in Contentful with this slug, or change the testSlug in this file.</p>
              </div>
            )}
          </section>
        </div>
      </main>

      <style jsx>{`
        .test-page {
          padding: 2rem 0;
        }
        
        .test-section {
          margin: 2rem 0;
          padding: 1rem;
          border: 1px solid #e0e0e0;
          border-radius: 8px;
        }
        
        .data-display {
          background: #f5f5f5;
          padding: 1rem;
          border-radius: 4px;
          overflow-x: auto;
          font-size: 0.875rem;
          max-height: 400px;
          overflow-y: auto;
        }
        
        .page-info {
          background: #f0f8ff;
          padding: 1rem;
          border-radius: 4px;
          margin-bottom: 1rem;
        }
        
        .components-preview {
          margin: 1rem 0;
        }
        
        .raw-data {
          margin-top: 2rem;
        }
        
        .error-message {
          background: #fff3cd;
          border: 1px solid #ffeaa7;
          color: #856404;
          padding: 1rem;
          border-radius: 4px;
        }
      `}</style>
    </>
  );
} 
 