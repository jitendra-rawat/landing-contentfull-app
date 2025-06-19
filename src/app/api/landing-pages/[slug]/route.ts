import { NextRequest, NextResponse } from 'next/server';
import { contentfulClient } from '@/lib/contentful';

interface RouteParams {
  params: {
    slug: string;
  };
}

export async function GET(
  request: NextRequest,
  { params }: RouteParams
) {
  try {
    const pageData = await contentfulClient.getLandingPage(params.slug);
    
    if (!pageData) {
      return NextResponse.json(
        {
          success: false,
          error: 'Landing page not found',
        },
        { status: 404 }
      );
    }
    
    return NextResponse.json({
      success: true,
      data: pageData,
    });
  } catch (error) {
    console.error('API Error:', error);
    
    return NextResponse.json(
      {
        success: false,
        error: 'Failed to fetch landing page from Contentful',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    );
  }
} 