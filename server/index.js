const express = require("express");
const app = express();

const path = require("path"); //used with deployements regularly

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../index.html"));
});

const port = process.env.PORT || 4005; //Heroku will make a env file with PORT variable. but in development we need a port still

app.listen(port, () => {
  console.log(`Server listening on ${port}`);
});
