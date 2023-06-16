const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();
let date = new Date();
const result = addDays(date, 100);

app.get("/", (request, response) => {
  response.send(
    `${result.getDate()}/${result.getMonth() + 1}/${result.getFullYear()}`
  );
});

app.listen(3200);
module.exports = app;
