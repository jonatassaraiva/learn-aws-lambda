'use strict'
const AWS = require('aws-sdk');
const validadeEvent = require('./controllers/validate-event');

module.exports.test = function (event, context, callback) {
  validadeEvent.validate(event)
    .then(result => {
      callback(null, result);
      context.succeed('Success!');
    })
    .catch(err => {
      callback(err, null);
      context.fail('Failed!');
    });
}