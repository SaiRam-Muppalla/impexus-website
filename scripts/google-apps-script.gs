/**
 * Google Apps Script — Contact Form Handler
 *
 * DEPLOY INSTRUCTIONS
 * -------------------
 * 1. Open Google Sheets → Extensions → Apps Script.
 * 2. Paste this file, replacing any existing content.
 * 3. In the sheet, rename Sheet1 to "Leads" (or update SHEET_NAME below).
 * 4. Click Deploy → New deployment → Web app.
 *    - Execute as: Me (your Google account)
 *    - Who has access: Anyone
 * 5. Copy the deployed URL.
 * 6. Paste it into .env.local as: VITE_FORM_ENDPOINT=<url>
 * 7. Re-deploy after any code changes (Deploy → Manage deployments → pencil icon).
 *
 * The frontend sends Content-Type: text/plain (JSON body) to avoid a CORS
 * preflight; this handler parses the body with JSON.parse().
 */

var SHEET_NAME = "Leads";

function doPost(e) {
  try {
    var data = JSON.parse(e.postData.contents);

    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName(SHEET_NAME);

    // Write header row on first submission
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(["Timestamp", "Name", "Email", "Phone", "Institution", "Message"]);
    }

    sheet.appendRow([
      new Date().toISOString(),
      sanitize(data.name),
      sanitize(data.email),
      sanitize(data.phone),
      sanitize(data.institution),
      sanitize(data.message),
    ]);

    return ContentService
      .createTextOutput(JSON.stringify({ ok: true }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (err) {
    return ContentService
      .createTextOutput(JSON.stringify({ ok: false, error: String(err) }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function sanitize(value) {
  if (typeof value !== "string") return "";
  // Strip leading = + - @ to prevent formula injection in Sheets
  return value.replace(/^[=+\-@\t\r]/, "").trim().slice(0, 1000);
}
