const bodyParser = require('body-parser');
const express = require('express');
const app = express();
const {
  getCongressInfo,
  postNewLetter,
} = require('./controller.js');

const port = 1337;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));

app.get('/president', getCongressInfo);
app.post('/letter', postNewLetter);

app.listen(port, () => {
  console.log(`Now listening to port: ${port}`);
});