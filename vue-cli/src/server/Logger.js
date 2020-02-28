const cart = require('./cart');
const FS = require('fs');
const moment = require('moment');
let add = (action, item) => {

            let log = {
                name: item.product_name,
                action: action,
                time: moment().format("dddd, MMMM Do YYYY, h:mm:ss a")
            };

            FS.readFile('server/db/logs.json','utf8',(err,data)=>{
                if(err){
                    console.log(err);
                }else {
                    let logs = JSON.parse(data);

                    logs.push(log);

                    FS.writeFile('server/db/logs.json', JSON.stringify(logs, null, 4),  (err)=>{
                        console.log(err);
                    })
                }

            })



};


module.exports = add;