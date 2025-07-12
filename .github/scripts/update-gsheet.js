const { google } = require('googleapis');
const fs = require('fs');
const path = require('path');

// Read Mochawesome report (adjust path if needed)
const reportPath = path.resolve('cypress/reports/mochawesome/mochawesome.json');
let summary = {
  totalTests: 0,
  passed: 0,
  failed: 0,
  duration: 0,
  start: '',
  end: ''
};

if (fs.existsSync(reportPath)) {
  const report = JSON.parse(fs.readFileSync(reportPath, 'utf8'));
  summary.totalTests = report.stats.tests;
  summary.passed = report.stats.passes;
  summary.failed = report.stats.failures;
  summary.duration = report.stats.duration;
  summary.start = report.stats.start;
  summary.end = report.stats.end;
}

const credentials = JSON.parse(process.env.GSHEETS_CREDENTIALS);
const sheetId = process.env.SHEET_ID;
const runId = process.env.GITHUB_RUN_ID;
const jobStatus = process.env.GITHUB_JOB_STATUS;

async function main() {
  const auth = new google.auth.GoogleAuth({
    credentials,
    scopes: ['https://www.googleapis.com/auth/spreadsheets'],
  });
  const sheets = google.sheets({ version: 'v4', auth: await auth.getClient() });

  // Append a row with detailed test results
  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A1',
    valueInputOption: 'RAW',
    requestBody: {
      values: [[
        new Date().toISOString(),
        runId,
        jobStatus,
        summary.totalTests,
        summary.passed,
        summary.failed,
        summary.duration,
        summary.start,
        summary.end
      ]],
    },
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
});