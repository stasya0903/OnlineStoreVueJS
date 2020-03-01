const FS = require('fs');
const cart = require('./cart');
const log = require('./Logger');

const actions = {
    add: cart.add,
    change: cart.change,
    deleteItem: cart.deleteItem
};

let handler = (req,res, file, action) => FS.readFile(file, 'utf8', ((err, data) => {
    if(err){
        res.send({result:0, text: "error"})
    }else{
        let newCart= actions[action] (JSON.parse(data),req);
        FS.writeFile(file, newCart, (err)=>{
            if(err){
                res.send({result:0, text: "error"});
            } else {
                res.send({result: 1, text: 'ok'});
                /*if (req.params.id){
                    log(action, JSON.parse(data).contents.find(el=> el.id_product = +req.params.id ))
                } else {
                    log(action, JSON.parse(data).contents.find(el=> el.id_product = +req.body.id_product ) )
                }*/

            }
        })


    }
}));

module.exports = handler;

