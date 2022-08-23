'use strict';
var server = require('server');
server.get('Show', function(req, res, next){
    res.json();
    next();
});

module.exports = server.exports();capsule-video-03c