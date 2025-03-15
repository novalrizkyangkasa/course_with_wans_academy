import { test, expect } from "@playwright/test";

// test.use({ storageState: "auth.json" });

test("Click add item", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/inventory.html");

  const buttonAddToCart = page.locator("#add-to-cart-sauce-labs-backpack");
  await buttonAddToCart.click();
});
