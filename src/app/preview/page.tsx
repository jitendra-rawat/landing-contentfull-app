import React from 'react';
import { Metadata } from 'next';
import Navigation from '@/components/Navigation';
import ComponentRenderer from '@/components/ComponentRenderer';
import { Component, LayoutConfig } from '@/types';

export const metadata: Metadata = {
  title: 'Preview - Landing Page Builder',
  description: 'Preview your landing page layout',
  robots: 'noindex, nofollow',
};

interface PreviewPageProps {
  searchParams: { config?: string };
}

export default function PreviewPage({ searchParams }: PreviewPageProps) {
  let components: Component[] = [];
  let layoutConfig: LayoutConfig | null = null;

  try {
    if (searchParams.config) {
      layoutConfig = JSON.parse(decodeURIComponent(searchParams.config));
      components = layoutConfig?.components || [];
    }
  } catch (error) {
    console.error('Error parsing layout config:', error);
  }

  return (
    <>
      <Navigation />
      
      <main>
        {components.length === 0 ? (
          <div className="container">
            <div className="preview-empty">
              <h1>Preview Mode</h1>
              <p>No layout configuration provided or invalid configuration.</p>
              <p>Use the Contentful App to create and preview your layouts.</p>
            </div>
          </div>
        ) : (
          <>
            <div className="preview-header">
              <div className="container">
                <div className="preview-info">
                  <h2>Preview Mode</h2>
                  <p>This is a preview of your landing page layout</p>
                  {layoutConfig && (
                    <div className="preview-meta">
                      <span>Version: {layoutConfig.version}</span>
                      <span>Last Modified: {new Date(layoutConfig.lastModified).toLocaleString()}</span>
                    </div>
                  )}
                </div>
              </div>
            </div>
            
            <ComponentRenderer components={components} />
          </>
        )}
      </main>
    </>
  );
} 