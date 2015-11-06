/* jshint node: true */
'use strict';

module.exports = {
  name: 'ember-public-env',

  contentFor: function(type) {
    if (type === 'head') {
      return '<script src="/--/env.js"></script>';
    }
  },

  serverMiddleware: function(config) {
    var self = this;
    var app = config.app;
    var options = config.options;

    app.use('/--/env.js', function(request, response, next) {
      response.contentType('text/javascript');
      response.send(self.generateEnvJs());
    });
  },

  generateEnvJs: function() {
    // dotenv stuff goes here
    var fs = require('fs');
    var dotenv = require('dotenv');
    var start = 'window.__env = ';
    var contents = fs.readFileSync('.env.public', { encoding: 'utf8' });
    var config = dotenv.parse(contents);

    return start + JSON.stringify(config);
  }
};
