'use strict';

const AWS = require('aws-sdk');
const Promise = require('bluebird');

const logger = require('../utils/logger');

module.exports = {
  validate
};

function validate(event) {
  return new Promise((resolve, reject) => {
    if (event.key === 'ok')
      return resolve(event);

    if (event.key === 'nok') {
      let err = new Error(`Validate: ${event.message}`);
      logger.error(err);
      return reject(err);
    }
  });
}