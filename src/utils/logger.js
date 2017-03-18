'use strict'
const winston = require('winston');
const enable = process.env.NODE_LOGGING_ENABLE || '0';

function init() {
  console.log(typeof(enable))
  if (enable === '1') {
    winston.add(winston.transports.Console, {
      name: 'default',
      json: true,
      level: process.env.NODE_LOGGING_LEVEL || 'verbose',
      handleExceptions: true,
      timestamp: function () {
        return new Date().toISOString().replace(/T/g, ' ');
      }
    })
  }

  return winston
}

module.exports = init();