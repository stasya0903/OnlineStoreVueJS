const express = require('express');
const FS = require('fs');
const APP = express();
const CART = require('./CartRouter');
const path = require('path');
const mongoose = require('mongoose');
const cors = require('cors');
const PORT = process.env.PORT || 3030;

APP.use(cors());
APP.use(express.json());
APP.use('/api/cart', CART);
APP.use(express.static('dist'));

async function connect(){
    try {
        console.log("start");
        await mongoose.connect('mongodb+srv://admin:1234@cluster0-imsxo.mongodb.net/onlineShop',{
            useNewUrlParser: true,
            useFindAndModify:false,
            useUnifiedTopology: true

        });
        APP.listen(PORT, () => {
            console.log( `server is running on ${PORT}`);
        });
    }catch (e) {
        console.log(`error ${e}`)

    }
}
connect(),
APP.get('/api/products', (req, res)=>{
    FS.readFile('./server/db/products.json', 'utf8', ((err, data) => {
        if(err){
            res.send({result:0, text: err})
        }else {
            res.send(data);
        }
    }))

});

