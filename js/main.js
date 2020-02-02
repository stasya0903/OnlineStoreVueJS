class Product {
    constructor(productObj) {
        this.id = productObj.id;
        this.title = productObj.product_name;
        this.price = productObj.price;
        this.img = "img/featured1.jpg";
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
    constructor(block, url) {
        this.block = document.getElementById(block);
        this.allproducts = [];
        this.__fetchData(url)
            .then(data => this.data = [...data])
            .then(() => this.__render())
    }

    __fetchData(url) {
        return fetch(url).then(respond => respond.json());
    }

    __render() {
        this.data.forEach((el) => {
            let product = new Product(el);
            this.allproducts.push(product);
            this.block.insertAdjacentHTML("afterbegin", product.render());

        })

    }
}


class Basket {
    constructor(items, total) {

    }
}

const URL = "https://raw.githubusercontent.com/GeekBrainsTutorial/online-store-api/master/responses/";
new Products("product_list", URL + "catalogData.json");




