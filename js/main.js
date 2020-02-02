class Product {
    constructor(productObj) {
        this.id = productObj.id;
        this.title = productObj.title;
        this.price = productObj.price;
        this.img = productObj.img;
    }

    render() {

        return `<article><div class="featured_content">
        <a href="singlePage.html"><img class="product_image" src=${this.img} alt="productphoto"></a>
        <div class="product_text">
            <a href="singlePage.html" class="product_link">${this.title}</a>
            <p class="price">$${this.price}</p>
        </div>
        <a href="singlePage.html" class="product_add">
            <img class="cart product__cart" src="img/card.svg" alt=""><img src="img/" alt="">
            Add to Cart
        </a>

    </div></article>`

    }
}

class Products {
    constructor(block) {
        this.block = document.getElementById(block);
        this.data = [];
        this.allproducts = [];
        this.init();
    }

    init() {
        this.__fetchData();
        this.__render();
    }

    __fetchData() {
        this.data = [
            {id: 1, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
            {id: 2, title: "Mango People T-shirt", price: "53", img: "img/featured1.jpg"},
            {id: 3, title: "Mango People T-shirt", price: "54", img: "img/featured1.jpg"},
            {id: 4, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
            {id: 5, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
            {id: 6, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
            {id: 6, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
            {id: 6, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"}

        ];
    }

    __render() {
        this.data.forEach((el) => {
            let product = new Product(el);
            this.allproducts.push(product);
            this.block.insertAdjacentHTML("afterbegin",product.render());

        })

    }
}


class Basket {
    constructor(items, total) {

    }
}
 new Products("product_list");






