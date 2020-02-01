let products = [
    {id: 1, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
    {id: 2, title: "Mango People T-shirt", price: "53", img: "img/featured1.jpg"},
    {id: 3, title: "Mango People T-shirt", price: "54", img: "img/featured1.jpg"},
    {id: 4, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
    {id: 5, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
    {id: 6, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
    {id: 6, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"},
    {id: 6, title: "Mango People T-shirt", price: "52", img: "img/featured1.jpg"}

];
const RENDER = (title, price, img) => {
    return `<article><div class="featured_content">
        <a href="singlePage.html"><img class="product_image" src=${img} alt="productphoto"></a>
        <div class="product_text">
            <a href="singlePage.html" class="product_link">${title}</a>
            <p class="price">$${price}</p>
        </div>
        <a href="singlePage.html" class="product_add">
            <img class="cart product__cart" src="img/card.svg" alt=""><img src="img/" alt="">
            Add to Cart
        </a>

    </div></article>`
};

const RENDER_PRODUCTS = (list) => {

    let LIST_OF_PRODUCTS = "";

    list.forEach((el) => LIST_OF_PRODUCTS += RENDER(el.title, el.price, el.img));

    document.getElementById("product_list").innerHTML = LIST_OF_PRODUCTS;

};


RENDER_PRODUCTS(products);




