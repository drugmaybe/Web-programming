const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 1200,
    height: 400,
  },
};

let page;

test.beforeEach(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/1-container.html");
  await page.setViewportSize(settings.viewport);
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Layout tests", () => {
  test("Header should have correct styles", async () => {
    const header = page.locator("header");

    await expect(header).toHaveCSS("display", "flex");
    await expect(header).toHaveCSS("flex-direction", "row-reverse");
  });

  test("Main should have correct styles", async () => {
    const main = page.locator("main");

    await expect(main).toHaveCSS("display", "flex");
  });

  test("List should have correct styles", async () => {
    const list = page.locator("header nav ul");

    await expect(list).toHaveCSS("display", "flex");
  });

  test("Layout should be equal to template", async () => {
    const template = await page.locator("html").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
