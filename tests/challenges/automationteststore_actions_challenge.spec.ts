import { test } from "@playwright/test";

test("E2E registration", async ({ page }) => {
  await page.goto("https://automationteststore.com/");
  await page.locator("#");
});
