const { test, expect } = require("@playwright/test");

let page;

test.beforeAll(async ({ browser }) => {
  page = await browser.newPage();
  await page.goto("/4-align-items.html");
});

test.afterAll(async () => {
  await page.close();
});

test("all HTML elements should be in index.html", async () => {
  const button = page.locator(".btn");
  const images = button.locator("img");
  const span = button.locator("span");

  await expect(button).toBeVisible();
  await expect(images).toBeVisible();
  await expect(span).toBeVisible();
});

test.describe("button tag tests", () => {
  test("button tag should have correct classes", async () => {
    const button = page.locator(".btn");
    const classes = /d-flex flex-center text-white/g;

    await expect(button).toHaveAttribute("class", classes);
  });

  test("button tag should have correct CSS styles", async () => {
    const button = page.locator(".btn");

    await expect(button).toHaveCSS("display", "flex");
    await expect(button).toHaveCSS("justify-content", "center");
    await expect(button).toHaveCSS("align-items", "center");
    await expect(button).toHaveCSS("color", "rgb(255, 255, 255)");
  });
});

test.describe("images tag tests", () => {
  test("img tag should have correct src path", async () => {
    const expected = [
      "images/check-icon.svg",
      "./images/check-icon.svg",
      "/images/check-icon.svg",
    ];
    const srcAttribute = await page.evaluate(() =>
      document.querySelector(".btn img").getAttribute("src")
    );

    expect(expected).toContain(srcAttribute);
  });

  test("img tag should have mr-1 class", async () => {
    const button = page.locator(".btn");
    const images = button.locator("img");

    await expect(images).toHaveAttribute("class", "mr-1");

    await expect(images).toHaveCSS("margin-right", "13.3333px");
  });
});

test("span element should have text", async () => {
  const button = page.locator(".btn");
  const span = button.locator("span");

  await expect(button).toHaveText("Принять");
});
