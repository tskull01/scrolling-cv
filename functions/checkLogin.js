const faunadb = require("faunadb");
const q = faunadb.query;
const client = new faunadb.Client({
  secret: process.env.FAUNADB_SERVER_SECRET,
});

exports.handler = (event, context, callback) => {
  const data = JSON.parse(event.body);
  console.log("Function `todo-create` invoked", data);
  console.log(typeof data);
  const login = {
    data: data,
  };

  return client
    .query(q.Get(q.Match(q.Index("email"), login.data["email"])))
    .then((response) => {
      console.log(response.data);
      return callback(null, {
        statusCode: 200,
        body: JSON.stringify(response),
      });
    })
    .catch((error) => {
      console.log("error", error);
      return callback(null, {
        statusCode: 400,
        body: JSON.stringify(error),
      });
    });
};
