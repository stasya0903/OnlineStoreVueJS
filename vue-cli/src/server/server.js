const express = require('express');
const FS = require('fs');
const APP = express();
const CART = require('./CartRouter');


//APP.use(express.json());
APP.use('/api/cart', CART);

const PORT = process.env.PORT || 8080;
APP.listen(PORT, () => {
    console.log( `server is running on ${PORT}`);
});

APP.get('/api/products', (req, res)=>{
    FS.readFile('server/db/products.json', 'utf8', ((err, data) => {
        if(err){
            res.send({result:0, text: err})
        }else {
            res.send(data);
        }
    }))

});
// get post put delete
// (req, res)
//res .send(текст или что то )
//req .
//  /: param  => req.params.id
// ? = req.query
