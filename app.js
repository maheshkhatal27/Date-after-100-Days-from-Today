const express = require("express");
const addDays = require("date-fns/addDays");

const app = express();

app.get("/", (request, response) => {
  const date = new Date();
  var afterHundredDays = addDays(date, 100);
  var my_date = afterHundredDays.getDate();
  var my_month = afterHundredDays.getMonth() + 1;
  var my_year = afterHundredDays.getFullYear();
  var todayDate = my_date + "/" + my_month + "/" + my_year;
  response.send(todayDate);
});

app.listen(3000);

module.exports = app;
