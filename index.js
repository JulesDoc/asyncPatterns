'use strict';

const request = require('request');

// 1. To start write a function named "getWebsite"
//    that receives a URL, uses the "request" module to fetch its
//    HTML content, and passes on the error or result to the callee.

// 2. Now write a function named "promiseWebsite"
//    that wraps "getWebsite" to work with JS promises.

// 3. Finally write a function named "awaitUppercaseWebsite"
//    that wraps "promiseWebsite" using async/await and
//    returns the website HTML content in uppercase.

module.exports = {
  getWebsite,
  promiseWebsite,
  awaitUppercaseWebsite
};
