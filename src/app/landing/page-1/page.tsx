import React from 'react';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ComponentRenderer from '@/components/ComponentRenderer';
import { contentfulClient } from '@/lib/contentful';

export const metadata: Metadata = {
  title: 'Landing Page 1 - Contentful + Next.js',
  description: 'Dynamic landing page built with Contentful CMS',
};

async function getPageData() {
  try {
    const pageData = await contentfulClient.getLandingPage('page-1');
    return pageData;
  } catch (error) {
    console.error('Error fetching page data:', error);
    return null;
  }
}

export default async function LandingPage1() {
  const pageData = await getPageData();

  return (
    <>
      <Navigation />
      
      <main>
        {pageData ? (
          <>
            <div className="page-header">
              <div className="container">
                <h1>{pageData.title}</h1>
                <p>Version: {pageData.version} | Last Modified: {new Date(pageData.lastModified).toLocaleDateString()}</p>
              </div>
            </div>
            
            <ComponentRenderer components={pageData.layout} />
          </>
        ) : (
          <div className="container">
            <div className="error-state">
              <h2>Page Not Found</h2>
              <p>This page doesn&apos;t exist in Contentful or there was an error loading it.</p>
              <p>Make sure you have:</p>
              <ul>
                <li>Created a page entry in Contentful with slug &quot;page-1&quot;</li>
                <li>Configured the layout with components</li>
                <li>Set up the correct environment variables</li>
              </ul>
            </div>
          </div>
        )}
      </main>
    </>
  );
} 