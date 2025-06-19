import React from 'react';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Navigation from '@/components/Navigation';
import ComponentRenderer from '@/components/ComponentRenderer';
import { contentfulClient } from '@/lib/contentful';

interface PageProps {
  params: {
    slug: string;
  };
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const pageData = await contentfulClient.getLandingPage(params.slug);
  
  if (!pageData) {
    return {
      title: 'Page Not Found',
      description: 'The requested page could not be found.',
    };
  }

  return {
    title: `${pageData.title} - Contentful + Next.js`,
    description: `Dynamic landing page: ${pageData.title}`,
  };
}

export default async function DynamicLandingPage({ params }: PageProps) {
  const pageData = await contentfulClient.getLandingPage(params.slug);

  if (!pageData) {
    notFound();
  }

  return (
    <>
      <Navigation />
      
      <main>
        <div className="page-header">
          <div className="container">
            <h1>{pageData.title}</h1>
            <p><strong>Slug:</strong> {pageData.slug}</p>
            <p>Version: {pageData.version} | Last Modified: {new Date(pageData.lastModified).toLocaleDateString()}</p>
          </div>
        </div>
        <div className="container">
          <h2>Layout Components</h2>
          <ComponentRenderer components={pageData.layout} />
          <h3>Raw layoutConfig JSON</h3>
          <pre style={{ background: '#f5f5f5', padding: '1rem', borderRadius: '4px', overflowX: 'auto' }}>
            {JSON.stringify({
              title: pageData.title,
              slug: pageData.slug,
              layoutConfig: {
                components: pageData.layout,
                lastModified: pageData.lastModified,
                version: pageData.version
              }
            }, null, 2)}
          </pre>
        </div>
      </main>
    </>
  );
} 