const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");
const cors = require("cors");
const bodyParser = require("body-parser");
const data = require("./db");

const PORT = process.env.PORT || 3000;
const app = express();

app.use("/graphql", cors(), bodyParser.json(), jsonGraphqlExpress.default(data));
app.listen(PORT, () =>
  console.log("JSON Server is running at http://localhost:" + PORT + "/graphql")
);
