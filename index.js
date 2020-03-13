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

module.exports = {
  getQuote,
  promiseQuote,
  awaitUppercaseQuote
};
