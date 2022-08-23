'use strict';

var server = require('server');
var userLoggedIn = require('*/cartridge/scripts/middleware/userLoggedIn');

server.get('Show', userLoggedIn.validateLoggedIn, function(req, res, next){
    // res.render('This is From Third_Controller file');
    res.render('isml/Third_isml');
    next();
});

// We can use the parameters like this also

// server.get("Show", function(x, y, z){
//     res.json();
//     next();
// });


server.get('Show1', function(req, res, next){
    res.setRedirectStatus('301');
    res.redirect('https://www.microsoft.com');
    next();
});


server.get('Show@', function(req, res, next){
    res.render('isml/Third_isml');
    next();
});




module.exports = server.exports();