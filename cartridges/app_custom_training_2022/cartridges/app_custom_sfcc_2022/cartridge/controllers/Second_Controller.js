'use strict';

var server = require('server');
server.get('Show1', function(req, res, next){
    var productID = req.querystring.pid;
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct(productID);
    if (product) {
        res.json({
            ID : product.ID,
            Name : product.name
        });
    }else{
        res.json({
            Error : 'No "Product" is Available with this ID ' +'= ' +productID,
        });
    }

    next();
});
server.get('Show2', function(req, res, next){
    var productID = req.querystring.pid;
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct(productID);
    if(product){
        res.json({
            ProductID : product.ID,
            ProductName : product.name
        });
    }else{
        res.json({
            Error1 : 'This is Practice Controller for Prodcut-Demo-Error Message ' + '= ' +productID,
        });
    }
    next();
});

// Middleware Steps

server.get('Show3', x, y,function(req, res, next){
    res.json();
    next();
});
function x(req, res, next){
    res.json();
    next();
};
function y(req, res, next){
    res.json();
    next(new Error('Rejected')); //If we will pass any parameter to the next(), then it will be treated as Failed.
};

server.get('Show4', function(req,res,next){
    res.json();
    next();
})




module.exports = server.exports();