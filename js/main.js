const API = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses";


class List {
    constructor(block, url) {
        this.data = [];
        this.url = url;
        this.block = document.getElementById(block);
        this.allproducts = [];
        this.init();

    }

    __getJSON(url) {
        return fetch(url ? url : `${API + this.url}`).then(respond => respond.json());
    }

    __render() {
        this.data.forEach((el) => {
            let product = new ProductItem(el);
            this.allproducts.push(product);
            this.block.insertAdjacentHTML("afterbegin", product.render());

        })
    }

    getItem(id) {
        return this.allproducts.find((el) => el.id_product === +id);

    }

    getItemIdx(id) {
        return this.allproducts.findIndex((el) => el.id_product === id);

    }

    calcSum() {
        return this.allproducts.reduce((sum, el) => sum + el.price * el.quantity, 0);
    }

    init() {
        return false;
    }
}

class Item {
    constructor(productObj, img) {
        this.id_product = productObj.id_product;
        this.product_name = productObj.product_name;
        this.price = productObj.price;
        this.img = img;

    }

    render() {
        return false
    }

}


class ProductItem extends Item {
    constructor(productObj, img = "img/featured1.jpg") {
        super(productObj, img)
    }


    render() {

        return `<article><div class="featured_content">
        <a href="singlePage.html"><img class="product_image" src=${this.img} alt="productphoto"></a>
        <div class="product_text">
            <a href="singlePage.html" class="product_link">${this.product_name}</a>
            <p class="price">$${this.price}</p>
        </div>
        <button data-id="${this.id_product}" class="product_add " id="product_add">
            <img class="cart product__cart" src="img/card.svg" alt=""><img src="img/" alt="">
            Add to Cart
        </button>

    </div></article>`

    }


}

class Products extends List {
    constructor(cart, block = "product_list", url = "/catalogData.json") {
        super(block, url);
        this.cart = cart;
    }

    init() {
        this.__getJSON().then(data => this.data = [...data])
            .then(() => this.__render());
        this.addEvents();
    }


    addEvents() {
        this.block.addEventListener("click", (event) => {
            if (event.target.classList.contains("product_add")) {
                let id = event.target.dataset.id;
                this.cart.addProduct(this.getItem(id));
            }
        })
    }
}


class Basket extends List {
    constructor(block = "drop__cart", url = "/getBasket.json") {
        super(block, url);
        this.amount = 0;
        this.countGoods = 0;
    }

    init() {
        this.__getJSON().then(data => {
            this.data = [...data.contents];
            this.countGoods = data.countGoods
        })
            .then(() => this.__render());

        this.addEvents()
    }

    __render() {
        let basket = "";
        this.data.forEach((el) => {
            let product = new BasketItem(el);
            this.allproducts.push(product);
            basket += product.render();
            this.amount = this.calcSum();
        });

        basket += `<div class="total_cart_drop">
                    <p>TOTAL</p>
                    <p id="total">$${this.amount}</p>
                </div>
                <div class="cart_drop_actions">
                    <a href="checkout.html">
                        <div class="cart_drop_btn">CHECKOUT</div>
                    </a>

                    <a href="shoppingCard.html">
                        <div class="cart_drop_btn">GO TO CART</div>
                    </a>

                </div>`;
        this.block.innerHTML = basket;
        this.updateCount();

    }


    addEvents() {
        document.getElementsByClassName("header__right")[0]
            .addEventListener("click", (event) => {
                if (event.target.classList.contains("header__cart") || event.target.classList.contains("drop_button"))
                this.block.classList.toggle("hidden");
            });

        this.block.addEventListener("click", (event) => {
            if (event.target.id === "deleteBtn") {
                this.deleteProduct(event.target.dataset.id)

            }
        })

    }

    addProduct(product) {
        this.__getJSON(`${API}/addToBasket.json`)
            .then((data) => data.result === 1)
            .then(() => {
                let item = this.getItem(product.id_product);
                if (item) {
                    item.quantity++;
                    this.__updateProduct(item);
                } else {
                    product = Object.assign({quantity: 1}, product);
                    this.__updateCart(product)
                }

            })


    }

    deleteProduct(productId) {
        this.__getJSON(`${API}/addToBasket.json`)
            .then((data) => data.result === 1)
            .then(() => {
                let item = this.getItem(productId);
                if (item.quantity > 1) {
                    item.quantity--;
                    this.__updateProduct(item);
                } else {
                    let index = this.allproducts.indexOf(item);
                    this.allproducts.splice(index, 1);
                    document.querySelector(`.cart-item[data-id="${item.id_product}"]`).remove();
                    this.block.querySelector("#total").innerHTML = this.calcSum();
                    this.updateCount();
                }

            })



    }

    __updateProduct(product) {

        let block = document.querySelector(`.cart-item[data-id="${product.id_product}"]`);
        block.querySelector(".price__prop").innerHTML = `${product.quantity} X ${product.price}`;
        this.block.querySelector("#total").innerHTML = this.calcSum();




    }

    __updateCart(product){
        let item =  new BasketItem(product);
        this.allproducts.push(item);
        this.block.insertAdjacentHTML("afterbegin", item.render() );
        this.block.querySelector("#total").innerHTML = this.calcSum();
        this.updateCount();

    }


    updateCount() {
        document.querySelector(".count__number").innerHTML = this.allproducts.length;
    }
}

class BasketItem extends Item {

    constructor(productObj, img = "img/cart__item1.jpg") {
        super(productObj, img);
        this.quantity = productObj.quantity;
    }

    render() {
        return `<div class="cart-item" data-id="${this.id_product}">
                    <img class="cart-item__img" src="${this.img}" alt="">
                    <div class="cart-item__info">
                        <p class="item_info__drop">${this.product_name}</p>
                        <p class="rating">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </p>

                        <p class="price__prop"> ${this.quantity} X $${this.price} </p>
                    </div>
                    <div class="delete_btn__drop">
                        <i data-id="${this.id_product}" id="deleteBtn" class="fas fa-times-circle"></i>
                    </div>
                </div>`
    }


}

let basket = new Basket;
let catalog = new Products(basket);




