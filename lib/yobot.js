'use strict';

/*
 * yobot
 * https://github.com/mathisonian/yobot
 *
 * Copyright (c) 2014 Matthew Conlen
 * Licensed under the MIT license.
 */
var _ = require('lodash');
var express = require('express');
var Q = require('q');
var bodyParser = require('body-parser');
var request = require('request');

function Yobot(api_key, options) {

    if (!(this instanceof Yobot)) {
        return new Yobot(api_key, options);
    }

    var defaults = {};

    this.options = _.defaults(options, defaults);

    this.yoKey = api_key;
    this._initializeServer();

}

Yobot.VERSION = require('../package.json').version;
module.exports = Yobot;


Yobot.prototype._initializeServer = function() {

    var self = this;
    var app = express();
    app.use(bodyParser());

    app.listen(process.env.PORT || 8000);
    

    app.get('/yo/', function(req, res) {

        var username = req.query.username;
        self.yoHandler(username);
        return res.json(200);
    });


    this.app = app;
};



/*
 * Sets up github webhook and adds the
 * repo to the in memory map
 */
Yobot.prototype.yo = function(input) {

    if(_.isUndefined(input)) {
        this._sendYo(input);
    } else if(_.isFunction(input)) {
        this.yoHandler = input;
    } else {
        return new Error('Input must either be a function or nothing');
    }
};


Yobot.prototype._sendYo = function() {

    return Q.ninvoke(request, 'post', {
        url: 'http://api.justyo.co/yoall/',
        json: {
            api_token: this.yoKey
        }
    });
};
