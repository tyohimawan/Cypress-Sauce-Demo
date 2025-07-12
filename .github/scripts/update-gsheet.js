const { google } = require('googleapis');

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

  await sheets.spreadsheets.values.append({
    spreadsheetId: sheetId,
    range: 'Sheet1!A1',
    valueInputOption: 'RAW',
    requestBody: {
      values: [[new Date().toISOString(), runId, jobStatus]],
    },
  });
}

main().catch(err => {
  console.error(err);
  process.exit(1);
}); 