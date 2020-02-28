Vue.component("cart", {
    template: `
        <div class="header__right">
                    <div v-if="itemsInBasket.length > 0" v-show="show" class="drop drop__cart drop_flex-column" id="drop__cart">
                    <div  class="cart-item" v-for="item of itemsInBasket">
                        <img class="cart-item__img" :src="item.img" alt="">
                        <div class="cart-item__info">
                            <p class="item_info__drop">{{item.product_name}}</p>
                            <p class="rating">
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                                <i class="fas fa-star"></i>
                            </p>
                            <p class="price__prop"> {{item.quantity}} X $ {{item.price}} </p>
                        </div>
                        <div class="delete_btn__drop">
                            <i @click="deleteItem(item)" id="deleteBtn" class="fas fa-times-circle"></i>
                        </div>
                     </div>
                <div class="total_cart_drop">
                    <p>TOTAL</p>
                    <p id="total">$ {{total}}</p>
                </div>
                <div class="cart_drop_actions">
                    <a href="checkout.html">
                        <div class="cart_drop_btn">CHECKOUT</div>
                    </a>

                    <a href="shoppingCard.html">
                        <div class="cart_drop_btn">GO TO CART</div>
                    </a>

                </div>
            </div>
                    <div class="drop drop__cart drop_flex-column" v-else v-show="show"> <h3 class="pink">Корзина Пуста</h3></div> 
                    <div @click="show = !show" class="header__cart">
                <div class="count bounce-in-top">
                    <span class="count__number">{{amount}}</span>
                </div>
            </div>
                    <div @click="show = !show" class="button button-flex drop_button">My Account
                    <span class="button__arrow">
                        <i class="fas fa-sort-down"></i>
                    </span>
                </div>
        </div>`,
    data() {
        return {
            basketUrl: "/getBasket.json",
            itemsInBasket: [],
            show: false,

        }
    },
    methods: {
        deleteItem(item) {
            console.log(item);
            let indx = this.itemsInBasket.indexOf(item);
            this.itemsInBasket.splice(indx, 1);
        },
        addItem(item) {
            console.log(item);
            let find = this.itemsInBasket.find((el)=> el.id_product === item.id_product);
            if(!find){
                let itemInCart = Object.assign({quantity: 1}, item);
                this.itemsInBasket.push(itemInCart)
            } else {
                find.quantity++
            }
        }
    },
    computed: {
        total() {
            return this.itemsInBasket.reduce((sum, el) => sum + el.price * el.quantity, 0);
        },
        amount() {
            return this.itemsInBasket.length;
        },

    },

    mounted() {
        this.$parent.getJson(`${API + "/getBasket.json"}`)
            .then((data) => {
                for (let el of data.contents) {
                    this.itemsInBasket.push(el);
                }
            });

    }


})
;