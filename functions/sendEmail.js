const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.DOMAIN,
});

exports.handler = function (event, context, callback) {
  const data = JSON.parse(event.body);
  const mailData = {
    to: data.email,
    from: "Tyler@twsprogramming.com",
    subject: "Some more info",
    text:
      "Thank you for visiting my site and playing through my example. This email was sent using a serverless function. Serverless functions give front end engineers full stack capabilities like sending emails or text messages. My personal phone number is 248-252-2381 if you would like to contact me. Fear not this is the only email I will send you strictly for demonstration purposes.",
  };

  mailgun.messages().send(mailData, (error, body) => {
    if (error) {
      return console.log(error);
    }

    callback(null, {
      statusCode: 200,
      body: `${body}`,
    });
  });
};
