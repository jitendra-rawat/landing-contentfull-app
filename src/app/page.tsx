import React from 'react';
import { Metadata } from 'next';
import Link from 'next/link';
import Navigation from '@/components/Navigation';
import './page.css';

export const metadata: Metadata = {
  title: 'Landing Page Builder - Contentful + Next.js',
  description: 'Build beautiful landing pages with our custom Contentful App and Next.js frontend',
  keywords: ['landing page', 'contentful', 'next.js', 'react', 'drag and drop'],
  openGraph: {
    title: 'Landing Page Builder - Contentful + Next.js',
    description: 'Build beautiful landing pages with our custom Contentful App and Next.js frontend',
    type: 'website',
  },
};

export default function HomePage() {
  return (
    <>
      <Navigation />
      
      <main>
        <section className="hero-section">
          <div className="container">
            <div className="hero-content">
              <h1 className="hero-title fade-in">
                Landing Page Builder
              </h1>
              <p className="hero-subtitle slide-in-up">
                Build beautiful, responsive landing pages with our custom Contentful App and Next.js frontend
              </p>
              <div className="hero-actions slide-in-up">
                <Link href="/landing/page-1" className="btn btn-primary btn-lg">
                  View Page 1
                </Link>
                <Link href="/landing/page-2" className="btn btn-secondary btn-lg">
                  View Page 2
                </Link>
                <Link href="/test" className="btn btn-secondary btn-lg">
                  Test Integration
                </Link>
              </div>
            </div>
          </div>
        </section>

        <section className="features-section">
          <div className="container">
            <h2 className="section-title text-center">Features</h2>
            <div className="features-grid">
              <div className="feature-card fade-in">
                <div className="feature-icon">🎯</div>
                <h3>Hero Blocks</h3>
                <p>Create stunning hero sections with headings, subtitles, CTAs, and background images.</p>
              </div>
              
              <div className="feature-card fade-in">
                <div className="feature-icon">📄</div>
                <h3>Two Column Layouts</h3>
                <p>Build content-rich sections with text on the left and images on the right.</p>
              </div>
              
              <div className="feature-card fade-in">
                <div className="feature-icon">🖼️</div>
                <h3>Image Grids</h3>
                <p>Display multiple images in beautiful 2x2 grid layouts with hover effects.</p>
              </div>
              
              <div className="feature-card fade-in">
                <div className="feature-icon">⚡</div>
                <h3>Performance Optimized</h3>
                <p>Built with Next.js for optimal performance, SEO, and user experience.</p>
              </div>
              
              <div className="feature-card fade-in">
                <div className="feature-icon">🎨</div>
                <h3>Drag & Drop</h3>
                <p>Intuitive visual editor with drag-and-drop functionality for easy content management.</p>
              </div>
              
              <div className="feature-card fade-in">
                <div className="feature-icon">📱</div>
                <h3>Responsive Design</h3>
                <p>All components are fully responsive and work perfectly on all devices.</p>
              </div>
            </div>
          </div>
        </section>

        <section className="cta-section">
          <div className="container">
            <div className="cta-content text-center">
              <h2>Ready to Build?</h2>
              <p>Start creating your landing pages with our powerful Contentful App.</p>
              <div className="cta-actions">
                <Link href="/landing/page-1" className="btn btn-primary btn-lg">
                  Explore Pages
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
} 