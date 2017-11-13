const lib = require(__dirname+'/lib');
var Email = lib.EmailController;

var data = {
    "api_key": "5ce7096ed4bf2b39932ff5fa84ed9ed8",
    "email_details": {
        "fromname": "yourfromname",
        "subject": "this is test email subject",
        "from": "from@example.com",
        "content": "<p> hi, this is a test email sent via Falconide JSON API.</p>"
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
