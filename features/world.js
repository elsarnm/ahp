import { setWorldConstructor, World, setDefaultTimeout } from '@cucumber/cucumber';
import { chromium } from 'playwright';

class CustomWorld extends World {
  async launchBrowser() {
    this.browser = await chromium.launch({ headless: false });
    this.context = await this.browser.newContext();
    this.page = await this.context.newPage();
  }

  async closeBrowser() {
    await this.page.close();
    await this.context.close();
    await this.browser.close();
  }
}

setWorldConstructor(CustomWorld);
setDefaultTimeout(900000); // timeout 900 detik