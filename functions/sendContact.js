const mailgun = require("mailgun-js")({
  apiKey: process.env.MAILGUN_API_KEY,
  domain: process.env.DOMAIN,
});

exports.handler = async function (event, context) {
  const data = JSON.parse(event.body);
  const myEmail = process.env.MY_EMAIL;
  const domainEmail = process.env.DOMAIN_EMAIL;
  const mailData = {
    to: myEmail,
    from: domainEmail,
    subject: data.name,
    text: data.message,
  };
  await mailgun.messages().send(mailData, (e, body) => {
    if (e) {
      return {
        statusCode: 400,
        body: JSON.stringify(e),
      };
    }
  });
  return {
    statusCode: 200,
    body: JSON.stringify("Mail sent"),
  };
};
