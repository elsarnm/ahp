import fs from 'fs/promises';
import axios from 'axios';

try {
  const fileContent = await fs.readFile('reports/json/cucumber_report.json', 'utf8');

  if (!fileContent.trim()) throw new Error('Report file is empty');

  const reportData = JSON.parse(fileContent);

  const response = await axios.post(
    'https://app.artillery.io/AH2RtS1U-dQrH7sdxMBGE6rY/playwright',
    {
      name: 'Cucumber Test Report',
    //   project: 'AH2RtS1U-dQrH7sdxMBGE6rY', // Ganti dengan project ID-mu
      data: reportData,
    },
    {
      headers: {
        Authorization: 'Bearer a9_nv7p3Y8fmlIcwi9gfAR27OulXsb-rzAW',
        'Content-Type': 'application/json',
      },
    }
  );

  console.log('✅ Report uploaded successfully');
} catch (err) {
  console.error('❌ Error uploading report:', err.response?.data || err.message);
}