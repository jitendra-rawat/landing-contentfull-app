import { NextResponse } from 'next/server';
import { contentfulClient } from '@/lib/contentful';

export async function GET() {
  try {
    const pages = await contentfulClient.getPages();
    
    return NextResponse.json({
      success: true,
      data: pages,
      count: pages.length,
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