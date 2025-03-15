import { test, expect } from "@playwright/test";

test("page go to", async ({ page }) => {
  await page.goto("https://www.saucedemo.com/");
  await expect(page).toHaveTitle("Swag Labs");

  const inputUsername = page.locator("#user-name");
  await inputUsername.fill("standard_user");
  await expect(inputUsername).toHaveValue("standard_user");

  const inputpassword = page.locator("#password");
  await inputpassword.fill("secret_sauce");
  await expect(inputpassword).toHaveValue("secret_sauce");

  const buttonLogin = page.locator("#login-button");
  await buttonLogin.click();

  // await page.context().storageState({ path: "auth.json" });
});
