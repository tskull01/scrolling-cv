const mailgun = require("mailgun-js");

exports.handler = function (event, context, callback) {
  const data = JSON.parse(event.body);
  console.log(data.email);
  const mg = mailgun({
    apiKey: process.env.MAILGUN_API_KEY,
    domain: process.env.DOMAIN,
  });

  const mailData = {
    to: "skulley.tyler@gmail.com",
    from: data.email,
    subject: data.name,
    text: data.message,
  };

  mg.messages().send(mailData, (error, body) => {
    if (error) {
      return console.log(error);
    }

    callback(null, {
      statusCode: 200,
      body: "Mail sent",
    });
  });
};
