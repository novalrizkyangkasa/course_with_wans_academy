import { chromium } from 'playwright';

export default async function globalSetup() {
  // Melakukan setup awal dan login
  const browser = await chromium.launch();
  const page = await browser.newPage();
  await page.goto('https://www.saucedemo.com/');
  
  // Melakukan login
  await page.fill('#user-name', 'standard_user');
  await page.fill('#password', 'secret_sauce');
  await page.click('#login-button');
  
  // Tunggu halaman login selesai
  // await page.waitForSelector('.product_label');
  
  // Simpan storage state setelah login berhasil
  await page.context().storageState({ path: 'auth.json' });
  
  await browser.close();
}
