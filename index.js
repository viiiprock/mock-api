const express = require("express");
const jsonGraphqlExpress = require("json-graphql-server");
const cors = require("cors");
const bodyParser = require("body-parser");
const deepClone = require("./deepClone");
const users = require("./fake/users");
const departments = require("./fake/departments");
const polls = require("./fake/polls");
const forums = require("./fake/forums");
const threads = require("./fake/threads");
const courses = require("./fake/courses");
const tags = require("./fake/tags");
const docCategories = require("./fake/doc-categories");

const PORT = process.env.PORT || 3000;
const app = express();

const mockDatas = {
  users: deepClone(users),
  forums: deepClone(forums),
  threads: deepClone(threads),
  tags: deepClone(tags),
  polls: deepClone(polls),
  courses: deepClone(courses),
  departments: deepClone(departments),
  docCategories: deepClone(docCategories)
};

app.use("/graphql", cors(), bodyParser.json(), jsonGraphqlExpress.default(mockDatas));
app.listen(PORT, () =>
  console.log("JSON Server is running at http://localhost:" + PORT + "/graphql")
);
