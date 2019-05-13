const express = require('express'),
  app = express(),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  session = require('express-session'),
  // jwt = require('jsonwebtoken'),
  // models = require('./models')
  PORT = 8080;

// const users = [
//   {username:"richard",password:"password"}
// ]

app.use(session({
  secret: "fmgffndmf",
  resave: false,
  saveUninitialized: false
}))

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))


app.listen(PORT, () => {
  console.log(`Server running at localhost:${PORT}`);
});
