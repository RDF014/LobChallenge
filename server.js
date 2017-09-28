const Lob = require('lob')('test_1335b336a14e137210ebec8c46fc7c9af26');

const bodyParser = require('body-parser');
const express = require('express');
const app = express();

const port = 1337;

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json({extended: true}));


app.post('/test', (req, res) => {
  console.log('recieved post req');
  res.status(201).send('HELLO WORLD');
});

app.listen(port, () => {
  console.log(`Now listening to port: ${port}`);
});








// Lob.letters.create({
//   description: 'Demo Letter',
//   to: {
//     name: 'Harry Zhang',
//     address_line1: '185 Berry St',
//     address_line2: '# 6100',
//     address_city: 'San Francisco',
//     address_state: 'CA',
//     address_zip: '94107',
//     address_country: 'US',
//   },
//   from: {
//     name: 'Leore Avidar',
//     address_line1: '185 Berry St',
//     address_line2: '# 6100',
//     address_city: 'San Francisco',
//     address_state: 'CA',
//     address_zip: '94107',
//     address_country: 'US',
//   },
//   file: '<html style="padding-top: 3in; margin: .5in;">HTML Letter for {{name}}</html>',
//   merge_variables: {
//     name: 'Harry'
//   },
//   color: true
// }, function (err, res) {
//   console.log(err, res);
// });