/* eslint-disable linebreak-style */
'use strict';
const needle = require('needle');

// 1. To start write a function named "getQuote"
//    that receives a URL, uses the "needle" module to fetch a
//    coding quote, and passes on the error or result to the callee.

// 2. Now write a function named "promiseQuote"
//    that wraps "getQuote" to work with JS promises.

// 3. Finally write a function named "awaitUppercaseQuote"
//    that wraps "promiseQuote" using async/await and
//    returns the content of the quote object in uppercase.

function getQuote (someUrl) {
  needle.get(someUrl, {method: 'Quote'}, function (error, response) {
    if (!error && response.statusCode == 200) {
      return console.log(response.body);
    }
    else return Eventer.addStatus( {type:'error', source:'url', id:rule.name, text:response.statusMessage });
  });
}

async function Callee () {
  console.log('calling');
  const result = getQuote('http://www.google.com');
  console.log(result);
}

function promiseQuote (someUrl) {
  return new Promise(resolve => {
    needle.get(someUrl, {method: 'Quote'}, function (error, response) {
      if (!error && response.statusCode == 200) {
        return console.log(response.body);
      }
      else return Eventer.addStatus( {type:'error', source:'url', id:rule.name, text:response.statusMessage });
    });
  });
}

async function awaitUppercaseQuote (someUrl) {
  console.log('calling');
  const result = await promiseQuote(someUrl);
  console.log(result);
}

awaitUppercaseQuote('http://www.google.com');



Callee();

module.exports = {
  getQuote,
  promiseQuote,
  awaitUppercaseQuote
};
