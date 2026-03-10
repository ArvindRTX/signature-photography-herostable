const { chromium } = require('playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Go to dev server
  await page.goto('http://localhost:8080');
  
  // Wait for the Featured Work section to load
  await page.waitForSelector('#portfolio');
  
  // Find the first image card
  const cards = await page.$$('#portfolio > div > div > div.columns-1 > div');
  if (cards.length > 0) {
    console.log("Found", cards.length, "cards");
    
    // Add console listener to see if our console.log triggers
    page.on('console', msg => console.log('BROWSER LOG:', msg.text()));
    
    // Click the first card
    console.log("Clicking the first card...");
    await cards[0].click();
    
    // Wait a moment to see if Lightbox appears
    await page.waitForTimeout(1000);
    
    const lightbox = await page.$('div.z-\\[100\\]');
    if (lightbox) {
      console.log("Lightbox appeared successfully!");
    } else {
      console.log("Lightbox did NOT appear.");
    }
  } else {
    // maybe selector is wrong
    const anyCards = await page.$$('text=Featured Work');
    console.log("Could not find cards with precise selector. Found Featured Work text:", anyCards.length > 0);
  }
  
  await browser.close();
})();
