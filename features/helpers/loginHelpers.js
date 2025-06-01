const dotenv = require('dotenv');

// Pindahkan deklarasi setelah require dotenv
const environment = process.env.NODE_ENV || 'prod'; // default to 'dev'

// Load file .env dari folder "env"
dotenv.config({ path: `./env/.env.${environment}` });

exports.userLogin = async function (page) {
  await page.goto(process.env.HOMEPAGE_URL);
  await page.getByRole('link', { name: 'Login ' }).click();
  await page.getByRole('link', { name: 'Sign in to Clio Manage' }).click();
  await page.getByRole('textbox', { name: 'Email' }).fill(process.env.EMAIL);
  await page.getByRole('button', { name: 'Next: Password' }).click();
  await page.getByRole('textbox', { name: 'Password' }).fill(process.env.PASS);
  await page.getByRole('button', { name: 'Sign In' }).click();
}