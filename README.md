# Email Automation Script

This Google Apps Script automates sending personalized cold emails using data from a Google Sheets document.

## Prerequisites
- A Google account
- A Google Spreadsheet with the sheet name `Cold Emails`
- A Google Drive file (resume) to attach to the emails
- Google Apps Script enabled for your Google Workspace

## Setup Instructions

1. **Create a Google Sheet**
   - Open Google Sheets and create a new sheet named `Cold Emails`.
   - Ensure the first row contains headers: `Name`, `Company Name`, `Email`, `Other Data` (if applicable).
   - Fill in recipient details starting from row 2.

2. **Set Up Google Apps Script**
   - Open the sheet and navigate to `Extensions` > `Apps Script`.
   - Replace the default script with the provided `sendEmails()` function.

3. **Modify the Script**
   - Replace `YOUR_RESUME_FILE_ID_HERE` with the actual Google Drive file ID of your resume.
   - Update placeholders like `your.email@example.com`, `YOUR_LINKEDIN_PROFILE`, and `YOUR_GITHUB_PROFILE` with your details.

4. **Authorize and Run the Script**
   - Click the play ▶ button in the Apps Script editor to run the script.
   - Grant the necessary permissions when prompted.

## Notes
- Ensure your Google account has permission to send emails via Google Apps Script.
- You can modify the email template in the script to fit your needs.
- Check the execution log in the Apps Script editor for debugging if needed.

## Troubleshooting
- If emails aren’t being sent, ensure the sheet name matches `Cold Emails`.
- Verify that all required columns contain data.
- Make sure you have sufficient Gmail quota remaining for the day.

## License
This script is open-source and can be modified as needed.
