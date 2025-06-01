import reporter from 'cucumber-html-reporter';
import open from 'open';

const options = {
  theme: 'bootstrap',
  jsonFile: './reports/json/cucumber_report.json',
  output: './reports/html/cucumber_report.html',
  reportSuiteAsScenarios: true,
  launchReport: false,
  metadata:{
    browser: {
      name: 'chrome',
      version: '120'
    },
    device: 'Local test machine | Elsa Sarah',
    platform: {
      name: 'macOS',
      version: 'Monterey'
    }
  }
};

reporter.generate(options);

// Auto open the HTML report
open('./reports/html/cucumber_report.html');