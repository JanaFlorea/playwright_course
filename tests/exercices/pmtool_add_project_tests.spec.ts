import { expect, test } from "@playwright/test";

test("Open Projects in PMTool", async ({ page }) => {
  await page.goto("https://tredgate.com/pmtool");
  await page.locator("#username").fill("playwright_jaro24");
  await page.locator("#password").fill("Playwright!2024");
  await page.locator('[type="submit"]').click();
  await page.locator("#Projects").click();

  await expect(
    page.locator(".table-scrollable table"),
    "Wait until project tab is visible",
  ).toBeVisible();

  await page.locator('[test_id="Add Project"]').click;

  await expect(
    page.locator('div[data-testid="Name"]'),
    "Name input is visible",
  ).toBeVisible();

  await expect(
    page.locator("button[type='submit']"),
    "Button has text",
  ).toHaveText("Save");
});
