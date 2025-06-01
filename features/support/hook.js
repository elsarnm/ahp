const { Before, After } = require('@cucumber/cucumber');
const { chromium } = require('playwright');
const fs = require('fs');
const path = require('path');


Before(async function () {
  this.browser = await chromium.launch({ headless: false });
  this.context = await this.browser.newContext();
  this.page = await this.context.newPage();
});

After(async function (scenario) {
  // Jika scenario gagal, ambil screenshot (jika page masih terbuka)
  if (scenario.result?.status === 'FAILED') {
    if (this.page && !this.page.isClosed()) {
      const screenshot = await this.page.screenshot();
      const screenshotPath = path.resolve(`./reports/screenshots/${Date.now()}.png`);
      fs.mkdirSync(path.dirname(screenshotPath), { recursive: true });
      fs.writeFileSync(screenshotPath, screenshot);
    }
  }

  // Tutup page dan browser jika masih aktif
  if (this.page && !this.page.isClosed()) {
    await this.page.close();
  }
  if (this.context) {
    await this.context.close();
  }
  if (this.browser) {
    await this.browser.close();
  }
});
