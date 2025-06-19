import { NextResponse } from 'next/server';
import { contentfulClient } from '@/lib/contentful';

export async function GET() {
  try {
    const landingPages = await contentfulClient.getLandingPages();
    
    return NextResponse.json({
      success: true,
      data: landingPages,
      count: landingPages.length,
    });
  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch landing pages from Contentful',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
} 