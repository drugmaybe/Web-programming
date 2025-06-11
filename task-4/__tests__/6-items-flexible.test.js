const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/6-items-flexible.html");
});

test.describe("layout tests", () => {
  test("flex-container should have correct styles", async ({ page }) => {
    const flexContainer = page.locator(".flex-container");

    await expect(flexContainer).toHaveCSS("display", "flex");
    await expect(flexContainer).toHaveCSS("flex-direction", "column");
  });

  test("flex-item should have correct styles", async ({ page }) => {
    const flexItem = page.locator(".flex-item").last();

    await expect(flexItem).toHaveCSS("flex", "1 1 200px");
  });

  test("no-shrink should have correct styles", async ({ page }) => {
    const noShrink = page.locator(".no-shrink");

    await expect(noShrink).toHaveCSS("flex-shrink", "0");
  });
});
