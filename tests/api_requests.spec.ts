import { test } from "@playwright/test";

test("Get request", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/train");
});

test("GET Request with URL parametr", async ({ request }) => {
  await request.get("https://tegb-backend-877a0b063d29.herokuapp.com/eshop", {
    params: { userId: 145 },
  });
});

test("Request Headers", async ({ request }) => {
  await request.get(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/header",
    {
      headers: {
        train: "Hlavicky v headers",
      },
    },
  );
});

test("POST with JSON body", async ({ request }) => {
  await request.post(
    "https://tegb-backend-877a0b063d29.herokuapp.com/train/body",
    {
      data: {
        stringProperty: "Jana test",
        numberProperty: 456,
        booleanProperty: false,
      },
    },
  );
});
