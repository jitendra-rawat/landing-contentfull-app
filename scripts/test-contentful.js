const { createClient } = require('contentful');

// Load environment variables
require('dotenv').config({ path: '.env.local' });

const client = createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
});

async function testContentful() {
  console.log('🔍 Testing Contentful connection...\n');

  try {
    // Test 1: Get all content types
    console.log('📋 Available Content Types:');
    const contentTypes = await client.getContentTypes();
    contentTypes.items.forEach(type => {
      console.log(`  - ${type.name} (${type.sys.id})`);
    });
    console.log('');

    // Test 2: Get all entries
    console.log('📄 All Entries:');
    const entries = await client.getEntries();
    entries.items.forEach(entry => {
      console.log(`  - ${entry.sys.contentType.sys.id}: ${entry.fields.title || entry.fields.slug || 'No title'}`);
    });
    console.log('');

    // Test 3: Try to get landing pages specifically
    console.log('🏠 Landing Pages:');
    try {
      const landingPages = await client.getEntries({
        content_type: 'landingPage',
        include: 2,
      });
      
      if (landingPages.items.length > 0) {
        landingPages.items.forEach(page => {
          console.log(`  - ${page.fields.title} (slug: ${page.fields.slug})`);
          if (page.fields.layoutConfiguration) {
            console.log(`    Components: ${page.fields.layoutConfiguration.components?.length || 0}`);
          }
        });
      } else {
        console.log('  No landing pages found. Create one with content type "landingPage"');
      }
    } catch (error) {
      console.log('  Content type "landingPage" not found. Create it first.');
    }
    console.log('');

    // Test 4: Try to get regular pages
    console.log('📝 Regular Pages:');
    try {
      const pages = await client.getEntries({
        content_type: 'page',
        include: 2,
      });
      
      if (pages.items.length > 0) {
        pages.items.forEach(page => {
          console.log(`  - ${page.fields.title} (slug: ${page.fields.slug})`);
        });
      } else {
        console.log('  No regular pages found.');
      }
    } catch (error) {
      console.log('  Content type "page" not found.');
    }

  } catch (error) {
    console.error('❌ Error connecting to Contentful:', error.message);
    console.log('\n🔧 Troubleshooting:');
    console.log('1. Check your CONTENTFUL_SPACE_ID and CONTENTFUL_ACCESS_TOKEN');
    console.log('2. Make sure your .env.local file exists');
    console.log('3. Verify your API key has proper permissions');
  }
}

testContentful(); 