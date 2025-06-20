import { NextResponse } from 'next/server';
import { contentfulClient } from '@/lib/contentful';

export async function GET() {
  try {
    // Fetch both regular pages and landing pages
    const [pages, landingPages] = await Promise.all([
      contentfulClient.getPages(),
      contentfulClient.getLandingPages()
    ]);
    
    return NextResponse.json({
      success: true,
      data: {
        pages,
        landingPages,
      },
      counts: {
        pages: pages.length,
        landingPages: landingPages.length,
      },
    });
  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch pages from Contentful',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
} 