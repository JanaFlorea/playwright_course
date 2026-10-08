import { expect, test } from "@playwright/test";

test("Assert Response Status 200", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train",
  );
  expect(response.status(), "Response status is 200").toBe(200);
});

test("Assert response header", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/1234",
  );
  const headers = response.headers();
  console.log(headers); // ? Vytažení všech hlaviček response
  // ! Pozor, názvy hlaviček v UI mode nemusí souhlasit (velká/malá písmena)
  const contentType = headers["content-type"]; // ? Vytažení hlavičky content-type a uložení do proměnné.

  expect(contentType, "Header Content-Type has Text").toBe(
    "application/json; charset=utf-8",
  );

  // ? Kontrola části hodnoty
  expect(contentType, "Header Content-Type contain Text").toContain(
    "application/json",
  );
});

test("Response body asserts", async ({ request }) => {
  const response = await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/eshop/1234",
  );
  const responseBody = await response.json();

  //* KOntrola eistence (oba dva asserty dělají stejnou věc)
  expect(responseBody.createdAt, "CreatedAt exists").toBeDefined();
  expect(responseBody, "createdAt Exist (toHaveProperty)").toHaveProperty(
    "createdAt",
  );
  // * Kontrola datového typu hodnoty
  expect(typeof responseBody.userId, "Response Body userId is a number").toBe(
    "number",
  );

  // * Kontrola hodnoty
  expect(responseBody.email, "Response Body Email has Text").toBe(
    "Tiburcius63@example.org",
  );
});
