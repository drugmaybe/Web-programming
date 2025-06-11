const { test, expect } = require("@playwright/test");

test.beforeEach(async ({ page }) => {
  await page.goto("/5-flex-grow.html");
});

test.describe("layout tests", () => {
  test("all element should be in index.html", async ({ page }) => {
    const rightAside = page.locator(".right-aside");
    const leftAside = page.locator(".left-aside");
    const contentSide = page.locator(".content-side");

    await expect(rightAside).toBeVisible();
    await expect(leftAside).toBeVisible();
    await expect(contentSide).toBeVisible();
  });

  test("rightAside should have correct styles", async ({ page }) => {
    const rightAside = page.locator(".right-aside");

    await expect(rightAside).toHaveCSS("width", "350px");
    await expect(rightAside).toHaveCSS("min-height", "360px");
  });

  test("leftAside should have correct styles", async ({ page }) => {
    const leftAside = page.locator(".left-aside");

    await expect(leftAside).toHaveCSS("width", "200px");
    await expect(leftAside).toHaveCSS("min-height", "360px");
  });

  test("contentSide should have correct styles", async ({ page }) => {
    const contentSide = page.locator(".content-side");

    await expect(contentSide).toHaveCSS("flex-grow", "1");
    await expect(contentSide).toHaveCSS("min-height", "360px");
  });
});
