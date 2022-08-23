'use strict';

var server = require('server');

server.get('Show', function(req, res, next){
    var productID = req.querystring.pid;
    // var categoryProduct = req.querystring.cgid;
    var ProductMgr = require('dw/catalog/ProductMgr');
    var product = ProductMgr.getProduct(productID); 
    if(product){
        res.json({
            ProductID : product.ID,
            ProductName : product.name,
        });
    }else{
        res.json({
            Error : 'No Product Is Available with this ID ' + '= ' + productID,
        });
// https://dev33-na-pfsweb.demandware.net/on/demandware.store/Sites-RefArch-Site/en_US/Second_Controller_P-Show?pid=apple-ipod-touchM
    };

    next();
});

module.exports = server.exports();