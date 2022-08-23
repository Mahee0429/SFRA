'use strict'
var server = require('server');

server.get('Show', y, function(req, res, next){
    res.xml();
    next();
},x);
function x (req, res, next){
    var viewData = {};
    viewData.Message1 = "This is from Message1 - X"
    res.xml(viewData)
    // res.xml({
    //     message : "This is from Message1 - X"
    // });
    next();
}
function y (req, res, next){
    var viewData = {};
    viewData.Message2 = "This is from Message2 - Y"
    res.xml(viewData)
    // res.xml({
    //     message2 : "This is from Message2 = Y"
    // });
    next();
}

module.exports = server.exports();