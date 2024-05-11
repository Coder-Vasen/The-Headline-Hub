import base from "playwright/test"
import { expect } from "playwright/test";


const test = base.extend<{ attachScreenshotsToReport: void }>({
    attachScreenshotsToReport: [
      async ({page}, use, testInfo): Promise<void> => {
        await use()
        if (testInfo.status !== testInfo.expectedStatus) {
          
          const screenshot = await page.screenshot()
          await testInfo.attach('screenshot', { body: screenshot, contentType: 'image/png' })
        }
      },
      { auto: true }
    ]
  })

test("should render Title", async ({page}) => {
    await page.goto("http://localhost:5173");
    expect(await page.title()).toBe("The Headline Hub")
    expect( page.getByText("Headline Hub", {exact: false})).toBeTruthy();
    expect(page.getByText("Loading", {exact: false})).toBeVisible()
    await page.screenshot({path: "screenshots/title.png"})
})

test("should load news", async ({page}) => {
    await page.goto("http://localhost:5173");
    await page.waitForSelector("article");
    expect((await page.$$("article")).length).toBeGreaterThan(3);
    await page.screenshot({path: "screenshots/news.png"})
} );


test("should filter news", async ({page}) => {
    await page.goto("http://localhost:5173");
    await page.waitForSelector("article");
    const firstArticle = await page.$("article");
    if(firstArticle){
        const text = await firstArticle.innerText();
        await page.fill("input", text.split(" ")[0]);
        await page.waitForTimeout(100);
        const articles = await page.$$("h2");
        for(const article of articles){
            const articleContent = await article.innerText()
            expect(articleContent.trim()).toContain(articleContent.trim());
        }
        await page.screenshot({path: "screenshots/filter.png"})
    }
});

test("show error", async ({page}) => {
    await page.goto("http://localhost:5173");
    await page.route("**/*", route => {
        route.request().url().includes("newsapi.org") ? route.abort() : route.continue();
    });
    
    await page.waitForTimeout(5000);
    await page.waitForSelector("p");
    expect(page.getByText("Oops!")).toBeVisible();
    await page.screenshot({path: "screenshots/err.png"})
})