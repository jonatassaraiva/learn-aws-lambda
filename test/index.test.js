'use strict';

const expect = require('chai').expect;
const myLambda = require('../src/handler');

describe('Event', function () {

  it('ok', function (done) {
    let callback = (err, result) => {
      expect(result.message).to.equal('successful key');
      done();
    }

    myLambda.test({
      key: 'ok',
      message: 'successful key',
    }, {
      succeed: (result) => {},
      fail: (err) => {}
    }, callback);
  });

  it('nok', function (done) {
    let callback = (err, result) => {
      expect(err.message).to.equal('Validate: error key');
      done();
    }

    myLambda.test({
      key: 'nok',
      message: 'error key'
    }, {
      succeed: (result) => {},
      fail: (err) => {}
    }, callback);
  });
});