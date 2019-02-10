const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");
const cors = require("cors");
const bodyParser = require("body-parser");
const deepClone = require("./deepClone");
const data = require("./data");
const polls = require("./fake/polls");

const PORT = process.env.PORT || 3000;
const app = express();

const mockDatas = { ...data, polls: deepClone(polls) };
console.log(mockDatas.polls);

app.use("/graphql", cors(), bodyParser.json(), jsonGraphqlExpress.default(data));
app.listen(PORT, () =>
  console.log("JSON Server is running at http://localhost:" + PORT + "/graphql")
);
