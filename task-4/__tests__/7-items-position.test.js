const { test, expect } = require("@playwright/test");

const settings = {
  screenshot: {
    type: "jpeg",
    quality: 70,
    fullPage: true,
  },
  viewport: {
    width: 700,
    height: 900,
  },
};

test.beforeEach(async ({ page }) => {
  await page.goto("/7-items-position.html");
  await page.setViewportSize(settings.viewport);
});

test.describe("Progress Line Layout", () => {
  test("Layout should be equal to template", async ({ page }) => {
    const template = await page.locator("html").screenshot(settings.screenshot);

    expect(template).toMatchSnapshot();
  });
});
