'use strict';

const express = require('express');
const bodyParser = require('body-parser');
var cors = require("cors");

const fs = require('fs');
const app = express();
const port = 5000;

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());


app.get('/record', (req, res) => {
  let rawdata = fs.readFileSync('record.json');
  let record = JSON.parse(rawdata);
  res.send(record);
});


app.put('/recordCount', (req, res) => {
  let data = JSON.stringify(req.body);
  fs.writeFileSync('record.json', data);
  res.send("OK");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});