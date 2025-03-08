function sendEmails() {
    // Open the active sheet and get the data range
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getSheetByName('Cold Emails');
    var data = sheet.getRange(2, 1, sheet.getLastRow() - 1, 4).getValues();  
  
  
    // Loop through each row of the sheet
    data.forEach(function(row) {
      var name = row[0];        // Column A: Name
      var companyName = row[1];  // Column B: Company Name
      var email = row[2];        // Column C: Email
  
      // Define the email subject and HTML body template
      var subject = "Exciting Software Engineering Opportunity at " + companyName;
  
      var resumeFile = DriveApp.getFileById('YOUR_RESUME_FILE_ID_HERE');
      
      // Sample HTML email body
      var body = 
                "<p>Hi " + name + ",</p>" +
                "<p>I hope you’re doing well! I’m reaching out regarding potential opportunities at <strong>" + companyName + "</strong>." +
                " I have experience in cloud architecture, automation, application development, and AI-based solutions.</p>" +
                "<p>Some of my key strengths include:</p>" +
                "<ul>" +
                "<li>Developing and optimizing web applications.</li>" +
                "<li>Building and maintaining scalable cloud solutions.</li>" +
                "<li>Automating infrastructure management.</li>" +
                "<li>Enhancing system efficiency with microservices.</li>" +
                "</ul>" +
                "<p>I’d love to discuss any opportunities where my skills might be a great fit for <strong>" + companyName + "</strong>.</p>" +
                "<p>Looking forward to connecting!</p>" +
                "<p>Best regards,</p>" +
                "<p><strong>Your Name</strong><br>" +
                "Email: <a href='mailto:your.email@example.com'>your.email@example.com</a><br>" +
                "Phone: <a href='tel:+1234567890'>+1-234-567-890</a><br>" +
                "LinkedIn: <a href='YOUR_LINKEDIN_PROFILE' target='_blank'>LinkedIn Profile</a><br>" +
                "GitHub: <a href='YOUR_GITHUB_PROFILE' target='_blank'>GitHub Profile</a></p>";
  
      // Send the email with HTML body
      if (email) {
        MailApp.sendEmail({
          to: email,
          subject: subject,
          htmlBody: body,
          attachments: [resumeFile.getAs(MimeType.PDF)]
        });
      }
    });
  }