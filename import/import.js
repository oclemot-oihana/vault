'use strict';

const request = require('request');
const dotenv = require('dotenv');
dotenv.config();


let subscriptionKey = process.env['COMPUTER_VISION_SUBSCRIPTION_KEY'];
let endpoint = process.env['COMPUTER_VISION_ENDPOINT']
if (!subscriptionKey) { throw new Error('Set your environment variables for your subscription key and endpoint.'); }

var uriBase = endpoint + 'formrecognizer/v2.0-preview/prebuilt/receipt/analyze';
const imageUrl = 'http://www.oihana.eu/upload/facture__FI-P921602-200344.jpg';


//const imageUrl = 'https://raw.githubusercontent.com/Azure-Samples/cognitive-services-REST-api-samples/master/curl/form-recognizer/contoso-allinone.jpg'
  

const options = {
    uri: uriBase,
    body: '{"url": ' + '"' + imageUrl + '"}',
    headers: {
        'Content-Type': 'application/json',
        'Ocp-Apim-Subscription-Key' : subscriptionKey
    }
};


/*
request.post(options, (error, response, body) => {
console.log(response.statusCode);

  if (error) {
    console.log('Error: ', error);
    return;
  }

  console.log(response.headers);

});
*/


const options2 = {
  uri: 'https://form-recognizer-eu.cognitiveservices.azure.com/formrecognizer/v2.0-preview/prebuilt/receipt/analyzeResults/8d279b3d-e27e-48d3-98d2-0cc9b70f473d',
  body: '{"url": ' + '"' + imageUrl + '"}',
  headers: {
      'Content-Type': 'application/json',
      'Ocp-Apim-Subscription-Key' : subscriptionKey
  }
};


request.get(options2, (error, response, body) => {
  if (error) {
    console.log('Error: ', error);
    return;
  }

  console.log (response);

});
