const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/2-wrap.html");
});

test.describe("Catalog Layout Tests", () => {
  test("all element should be in index.html", async ({ page }) => {
    const catalogWrap = page.locator(".catalog");
    const catalogItem = page.locator(".catalog-item").first();

    await expect(catalogWrap).toBeVisible();
    await expect(catalogItem).toBeVisible();
  });

  test("There should be 6 product cards on the page", async ({ page }) => {
    const catalogItemCount = await page.locator(".catalog-item").count();

    await expect(catalogItemCount).toBe(6);
  });

  test("catalog should have correct styles", async ({ page }) => {
    const catalog = page.locator(".catalog");

    await expect(catalog).toHaveCSS("display", "flex");
    await expect(catalog).toHaveCSS("flex-wrap", "wrap");
  });
});
