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
            <p>Version: {pageData.version} | Last Modified: {new Date(pageData.lastModified).toLocaleDateString()}</p>
          </div>
        </div>
        
        <ComponentRenderer components={pageData.layout} />
      </main>
    </>
  );
} 