'use strict';

var server = require('server');

server.get('Show', x, z,function(req, res, next){
    res.json();
    next();
},y);
function x(req, res, next){
    var Data = {};
    Data.msg1 = "This is the Message from - X";
    res.json(Data);
    next();
};
function y(req, res, next){
    var Data = {};
    Data.msg2 = "This is the Message from - Y";
    res.json(Data);
    next();
};
function z(req, res, next){
    var Data = {};
    Data.msg3 = "This is the Message from - Z";
    res.json(Data);
    next(new Error('Rejected = Because we are passing Argument in the next method'));
};

module.exports = server.exports();