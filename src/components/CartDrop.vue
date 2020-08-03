<template>
  <div class="header__right">
    <div v-if="allItemsInBasket.length > 0" v-show="show" class="drop drop__cart drop_flex-column"
         id="drop__cart">
      <div class="cart-item" v-for="item of allItemsInBasket"
      :key="item.id_product">
        <img :src="require(`@/assets/cart__item1.jpg`)" class="cart-item__img" alt="">
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
          <font-awesome-icon @click="deleteItem(item)" id="deleteBtn" class="fas fa-times-circle" :icon="['fas', 'times-circle']"/>
        </div>
      </div>
      <div class="total_cart_drop">
        <p>TOTAL</p>
        <p id="total">$ {{total}}</p>
      </div>
      <div class="cart_drop_actions">
        <router-link to="/checkout">

          <div class="cart_drop_btn">CHECKOUT</div>
        </router-link>

        <router-link to="/cart">
          <div class="cart_drop_btn">GO TO CART</div>
        </router-link>

      </div>
    </div>
    <div class="drop drop__cart drop_flex-column" v-else v-show="show"><h3 class="pink">Корзина
      Пуста</h3></div>
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
  </div>
</template>

<script>
  import{mapGetters, mapActions, mapMutations} from 'vuex'
  export default {
    name: "CartDrop",
    data() {
      return {
        api: `https://onlinestoreonvue.herokuapp.com/api/cart`,
        show: false,
      }
    },
    methods: {
      ...mapActions(["getJson","putJson",'postJson','deleteJson','deleteItem']),

    },
    computed: mapGetters(['allItemsInBasket', 'amount', 'total']),

    async mounted() {
     this.getJson({api:this.api, action:'getItemsInBasket'});

    }
  }

</script>

<style scoped>

</style>
