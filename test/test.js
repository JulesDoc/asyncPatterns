'use strict';

require('chai').should();
const request = require('request');

const http = require('./../index.js');

const url = 'http://quotes.stormconsultancy.co.uk/quotes/3.json';

let html;

describe('Async exercise', () => {

  before(
    'set up the HTML reference',
    done => request(url, (err, res, body) => {
      if (err) done(err);
      else {
        html = body;
        done();
      }
    })
  );

  describe('getWebsite', () => {

    it(
      'should get a website and pass the error or result to its callee',
      done => http.getWebsite(url, (err, body) => {
        if (err) done(err);
        else {
          try {
            body.should.equal(html);
            done();
          } catch (e) {
            done(e);
          }
        }
      })
    );

  });

  describe('promiseWebsite', () => {

    it(
      'should use a regular function',
      () => http.promiseWebsite.toString().split(' ')[0].should.equal('function')
    );

    it(
      'this function should return a promise',
      () => http.promiseWebsite(url).should.be.a('promise')
    );

    it(
      'the promise should eventually be fulfilled with the website content',
      async () => {
        const body = await http.promiseWebsite(url);
        body.should.equal(html);
      }
    );

  });

  describe('awaitWebsite', () => {

    it(
      'should use an async function',
      () => http.awaitWebsite.toString().split(' ')[0].should.equal('async')
    );

    it(
      'should eventually return the website content',
      async () => {
        const body = await http.awaitWebsite(url);
        body.should.equal(html);
      }
    );

  });

});
