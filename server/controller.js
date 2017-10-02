// Normally in real world apps, the API key would not be included in the file like below.
// It would be set as an ENV variable and then reference like: process.env.LOB_API_KEY.
// I included it here for ease of use when reviewing. 
const Lob = require('lob')('test_1335b336a14e137210ebec8c46fc7c9af26');
const https = require('https');

exports.postNewLetter = (req, res) => {
  const {
    name, 
    addressLine1,
    addressLine2,
    addressCity,
    addressState,
    addressZip,
    message,
    president,
  } = req.body;
  Lob.letters.create({
    description: 'Demo Letter',
    to: {
      name: president.name,
      address_line1: president.addressLine1,
      address_city: president.addressCity,
      address_state: president.addressState,
      address_zip: president.addressZip,
    },
    from: {
      name: name,
      address_line1: addressLine1,
      address_line2: addressLine2,
      address_city: addressCity,
      address_state: addressState,
      address_zip: addressZip
    },
    file: `<html style="padding-top: 3in; margin: .5in;">${message}</html>`,
    color: true
  }, (err, letterObj) => {
    if (err) {
      res.status(400).json(err);
    } else {
      res.status(201).json(letterObj);
    }
  });
};

exports.getCongressInfo = (req, res) => {
  // See the above note for the Lob API Key.
  // ex. process.env.GOOGLE_API_KEY
  const apiKey = 'AIzaSyA7QykLBrVYFcm-YD5yiz6te7ZmIOUDRO8';
  const address = req.query.address;
  const url = `https://www.googleapis.com/civicinfo/v2/representatives?key=${apiKey}&address=${address}&levels=country`;
  https.get(url, (google) => {
    let rawData = '';
    google.on('data', (chunk) => rawData += chunk);
    google.on('end', () => {
      const data = JSON.parse(rawData);
      if (data.error) {
        console.log(data);
        return res.status(400).json(data);
      }
      const {name, address} = data.officials[0];
      const addressLine1 = address[0].line2;
      const addressCity = address[0].city;
      const addressState = address[0].state;
      const addressZip = address[0].zip;
      const president = {name, addressLine1, addressCity, addressState, addressZip};
      res.status(200).json(president);
    });
  });
};