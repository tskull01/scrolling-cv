const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.DOMAIN,
});

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body);
  const email = data.email;

  const mailData = {
    to: email,
    from: "Tyler <tyler@mg.twsprogramming.com>",
    subject: "Some more info",
    text:
      "Thank you for visiting my site and playing through my example.\n This email was sent using a serverless function. Serverless functions give front-end engineers full stack capabilities like sending emails or text messages.\n My personal phone number is 248-252-2381 if you would like to contact me. Fear not this is the only email I will send you. Strictly for demonstration purposes.",
  };
  await mailgun.messages().send(mailData, (e, body) => {
    if (e) {
      return {
        statusCode: 400,
        body: JSON.stringify(error),
      };
    }
  });
  return {
    statusCode: 200,
    body: JSON.stringify("Mail sent"),
  };
};
