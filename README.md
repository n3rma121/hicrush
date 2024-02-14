[![Netlify Status](https://api.netlify.com/api/v1/badges/d45c86b5-c6e0-4b6b-9b08-0a512a310694/deploy-status)](https://app.netlify.com/sites/hicrush/deploys)
# Proposing To Crush in a Different Way :-)

I have used Google App Script that sends notification to my email address mentioned in Appscript.

# Code.gs file for Script
```js
function sendEmailNotification(response) {
  var recipient = "youremail@a.com";  // Replace with your email
  var subject = "Proposal Response Notification";
  var message = "User responded with: " + response;

  MailApp.sendEmail(recipient, subject, message);
}

function doPost(e) {
  if (e.parameter.responseMessage) {
    sendEmailNotification(e.parameter.responseMessage);
    return ContentService.createTextOutput("Your message sent successfully to me :)");
  } else {
    return ContentService.createTextOutput("No response message received.");
  }
}

```
Good luck!
