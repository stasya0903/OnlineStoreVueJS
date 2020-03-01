const express = require('express');
const FS = require('fs');
const router = express.Router();
const handler= require('./handler');

router.get('/',(req,res)=>{
    FS.readFile('./server/db/cart.json','utf8', ((err, data) => {
        if(err){
            res.send({result:0, text: err})
        } else {
            res.send(data);
        }
    }))
});

router.post('/', (req,res)=>{
    handler(req,res, './server/db/cart.json',"add");
});

router.put('/:id', (req,res)=>{
  handler(req,res, './server/db/cart.json',"change");
});

router.delete('/', (req,res)=>{
    handler(req,res, './server/db/cart.json',"deleteItem");
});

module.exports = router;
