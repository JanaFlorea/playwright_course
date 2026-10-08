import { expect, test } from "@playwright/test";

test("Exercise: API asserts", async ({ request }) => {
  const response = await request.patch(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train",
  );
  const responseBody = await response.json();

  expect(
    typeof responseBody.timestamp,
    "Response Body timestamp is text (string)",
  ).toBe("string");
  expect(responseBody.id, "Response body ID is value ").toBe(1);
});
