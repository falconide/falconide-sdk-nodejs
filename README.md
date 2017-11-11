Falconide SDK for NodeJS 
=================
This SDK was semi-automatically generated by APIMATIC v2.0. Thanks to [APIMATIC](http://apimatic.io/)

Installation
=================
**Clone Repository**
```
git clone https://github.com/falconide/falconide-sdk-php.git
```
**Install Dependencies**
```
cd falconide-sdk-nodejs
npm install
```

Usage
=================
create a file example.js and put the below code

***example.js***
```js
const lib = require(__dirname+'/lib');
var Email = lib.EmailController;

var data = {
    "api_key": "yourapikey",
    "email_details": {
        "fromname": "yourfromname",
        "subject": "this is test email subject",
        "from": "from@example.com",
        "content": "<p> hi, this is a test email sent via Pepipost JSON API.</p>"
    },
    "recipients": [
        "to@example.com"
    ]
};

Email.createFalconapiWebSendJson(data,callback_mail_sent);

function callback_mail_sent(response){
    if(response.errorcode==0){
        console.log("mail sent successfully.\n");
    }
    else{
        console.log("Email sent Failed.\n");
        console.log("errormessage("+response.errormessage+")\n");
        console.log("errorcode("+response.errorcode+")\n");
    }
}

```

```
nodejs example.js
```

Advance Usage Example
=================
create a file example.js and put the below code

***example.js***
```js
const lib = require(__dirname+'/lib');
var Email = lib.EmailController;

var data = {
    "api_key": "yoursecretkey",
    "recipients": ["recipient1@example.com", "recipient2@example.com"],
    "email_details": {
        "from": "from@example.com",
        "subject": "Hi [% NAME %], here is your account balance.",
        "content": "<p>Hi [%NAME%],<\/p><p>Your account balance is [% ACCOUNT_BAL %].<\/p>",
        "fromname": "SDK Sender Name ",
        "replytoid": "replyto@example.com"
    },
    "tags": "AccountDeactivation, Verification",
    "X-APIHEADER": ["UserID1", "UserID2"],
    "settings": {
        "footer": true,
        "clicktrack": true,
        "opentrack": true,
        "unsubscribe": true,
        "bcc": "bcc@example.com"
    },
    "attributes": {
        "NAME": ["NameOfRecipient1", "NameOfRecipient2"],
        "ACCOUNT_BAL": ["100", "200"]
    },
    "files": {
        "example_attachment1.txt": "",
        "example_attachment2.pdf": ""
    }
};

Email.createFalconapiWebSendJson(data,callback_mail_sent);

function callback_mail_sent(response){
    if(response.errorcode==0){
        console.log("mail sent successfully.\n");
    }
    else{
        console.log("Email sent Failed.\n");
        console.log("errormessage("+response.errormessage+")\n");
        console.log("errorcode("+response.errorcode+")\n");
    }
}

```