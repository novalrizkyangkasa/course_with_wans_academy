import { chromium } from 'playwright';

export default async function globalTeardown() {
  // Biasanya Anda bisa membersihkan atau menyimpan status setelah semua tes selesai
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  // Jika perlu melakukan pembersihan, misalnya log out atau lainnya
  await page.goto('https://www.saucedemo.com/');
  
  // Simpan atau sesuaikan jika perlu
  await page.context().storageState({ path: 'auth.json' });

  await browser.close();
}
