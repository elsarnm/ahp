# AHP Test Automation

This project is an automation testing framework using Gherkin (BDD) syntax with Cucumber + Playwright + JavaScript for a law firm application on the Clio website.

## 🧾 Pre-condition

Before running this project, make sure you have installed:

- [Node.js](https://nodejs.org/) (version 14 or later is recommended)
- [npm](https://www.npmjs.com/) (installed with Node.js)
- Git

---

## 📥 Clone Project Steps


1. You can create a folder to organize your local repositories, or simply clone directly into your preferred directory.
2. Visit: https://github.com/elsarnm/ahp
3. git clone https://github.com/elsarnm/ahp.git
4. Navigate into the cloned folder
5. Install dependencies: "npm install"

---

## Run Test

npm run test -- --tags "@full_workflow"

If there is an error, please make sure to look on the package.json

---

## 📊 How to see Report Test

After running the test, the results can be seen in:

1. reports/html/cucumber_report.html
2. reports/json/cucumber_report.json

Or, with running this command:

3. npm run report