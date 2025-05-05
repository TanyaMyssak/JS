
/* Launching a browser */
   /*  console.log('Launching browser...');
const browser = await puppeteer.launch({ headless: false });
    console.log('Opening new page...');
const page = await browser.newPage();
const title = await page.title();
     console.log('Page title:', title);

await page.setViewport({ width: 1280, height: 720 });
    console.log('Going to puppeteer.com...');
await page.goto('https://pptr.dev/guides/getting-started');

await page.waitForSelector('h1'); 
const title = await page.title();  

    console.log('Taking screenshot...');
await page.screenshot({ path: 'w12311.png' });
    console.log('Screenshot saved.');
await browser.close(); 
    console.log('Browser closed.'); */ 

    import puppeteer from 'puppeteer';

(async () => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();

  // Navigate to the page
  await page.goto('https://developer.chrome.com/');

  // Set viewport
  await page.setViewport({width: 1080, height: 1024});

  // Type into the search box
  const searchInputSelector = 'input[name="q"]';
  await page.waitForSelector(searchInputSelector);
  await page.type(searchInputSelector, 'automate beyond recorder');

  // Wait for the search results and click the first result
  const searchResultSelector = '.devsite-result-item-link';
  await page.waitForSelector(searchResultSelector, { timeout: 10000 });
  await page.click(searchResultSelector);

  // Wait for the title of the article to load and print it
  const textSelector = await page.waitForSelector('text/Customize and automate');
  const fullTitle = await textSelector?.evaluate(el => el.textContent);

  console.log('The title of this blog post is "%s".', fullTitle);

  await browser.close();
})();
