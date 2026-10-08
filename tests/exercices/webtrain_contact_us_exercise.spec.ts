import { test } from "@playwright/test";

test("", async ({ page }) => {
  await page.goto("https://tredgate.com/webtrain/contact.html ");
  await page.locator("#full-name").fill("Jana Florea");
  await page.locator("#email").fill("test@test.com");
  await page.locator("#contact-date").fill("2026-10-06");
  const role = page.locator("#role");
  await role.selectOption("student");
  await page.locator("#comments").fill("testtest");
  await page.locator("#newsletter").check();

  await page.locator('[data-testid="button-submit"]').click();
});
