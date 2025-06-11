const { test, expect } = require("@playwright/test");

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/3-justify-content.html");
});

test.afterAll(async () => {
  await page.close();
});

test.describe("Layout Tests", () => {
  test("container should have correct styles", async () => {
    const container = page.locator(".container");

    await expect(container).toHaveCSS("display", "flex");
    await expect(container).toHaveCSS("flex-direction", "column");
    await expect(container).toHaveCSS("justify-content", "space-between");
  });
});
