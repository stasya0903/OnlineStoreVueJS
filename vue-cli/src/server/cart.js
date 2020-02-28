let add = (cart, req)=>{
    cart.contents.push(req.body);
    return JSON.stringify(cart,null, 4);
};

let change = (cart, req)=>{
    let product = cart.contents.find(el => el.id_product === +req.params.id);
    product.quantity += req.body.quantity;
    return JSON.stringify(cart,null, 4);
};

let deleteItem = (cart, req)=>{

    cart.contents.splice(cart.contents.indexOf(req.body), 1);
    return JSON.stringify(cart,null, 4);
};


module.exports = {
    add,
    change,
    deleteItem
};