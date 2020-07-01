const mailgunSdk = require("mailgun-js");
const apiKey = process.env.MAILGUN_API_KEY;
const domain = `mail.${process.env.DOMAIN}`;
const mailgun = mailgunSdk({ apiKey, domain });

exports.handler = async (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log(domain);
  let response;
  try {
    /* Send email to recicipent */
    response = await mailgun.messages().send({
      to: data.email,
      from: domain,
      subject: "Some more contact info",
      text:
        "Thank you for visiting my site and playing through my example. My personal phone number is 248-252-2381 if you would like to contact me. Fear not this is the only email I will send you strictly for demonstration purposes.",
    });
  } catch (e) {
    console.log("Err", e);
    return {
      statusCode: e.statusCode || 500,
      body: JSON.stringify({
        error: e.message,
      }),
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      result: response.message,
    }),
  };
};
