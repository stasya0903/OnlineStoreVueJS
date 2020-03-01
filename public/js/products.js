Vue.component('product', {
    props: ["item"],
    template: `<article><div class="featured_content">
        <a href="singlePage.html"><img class="product_image" src="./img/featured1.jpg" alt="productphoto"></a>
        <div class="product_text">
            <a href="singlePage.html" class="product_link">{{item.product_name}}</a>
            <p class="price">$ {{item.price}}</p>
        </div>
        <button @click="$emit('addProduct', item)" class="product_add " id="product_add">
            <img class="cart product__cart" src="img/card.svg" alt=""><img src="img/" alt="">
            Add to Cart
        </button>

    </div>
        </article>`
});

Vue.component("products", {
    template:
        `<div class="container product_box" id="product_list">
            <product 
                v-for="item of allProducts"
                :item="item" 
                :key="item.product_id"
                @addProduct="addProduct">
             </product>
         </div>`,
    data() {
        return {
            allProducts: [],
            data: [],
            url: "/catalogData.json"
        }
    },
    mounted() {
        this.$parent.getJson(`${API + this.url}`)
            .then((data) => {
                for (let el of data) {
                    this.allProducts.push(el);
                }
            });

    },
    methods:{
        addProduct(item){
            this.$root.$refs.Cart.addItem(item);
        }

    }




});

