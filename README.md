# Proposing To Crush in a Different Way :-)

I have used Google App Script that sends notification to my email address mentioned in Appscript.

# Code.gs file for Script
```
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
My small effort to do something unique to propose to my crush.

I hope she will accept it.
