<template>
  <div>
    <newArrival></newArrival>
   <cartItems v-if="allItemsInBasket.length"></cartItems>
    <div v-else class="container container__featured" >
      <p class="featured" >Корзина пуста</p>
      <router-link to="/catalog"><div class="featured checkout_button btnWhiteEffects">cONTINUE sHOPPING</div>
      </router-link>
    </div>
    <div v-if="allItemsInBasket.length" class="container checkout_optiions">
      <div @click="clearCart" class="checkout_button btnWhiteEffects">cLEAR SHOPPING CART</div>
      <router-link to="/catalog" class="checkout_button btnWhiteEffects">cONTINUE sHOPPING</router-link>


    </div>
    <div v-if="allItemsInBasket.length" class="container before_checkout">
      <adress-quote class="checkout_forms adress"></adress-quote>
      <coupon class="checkout_forms coupon"></coupon>
      <div class="checkout_forms">
        <div class="proceed_checkout">
          <div class="proceed_checkout__upper">

            <div class="subtotal subtotal__checkout"><span>SUB TOTAL</span><span
              class="space"></span><span>${{total}}</span></div>
            <div class="grandTotal grandTotal__checkout"><span>GRAND TOTAL</span><span
              class="space"></span><span class="pink">${{total}}</span></div>
          </div>
          <div class="proceed_checkout__down">
            <div class="button button_upper bold button__checkout btnPinkEffects">proceed to
              checkout
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>

</template>

<script>
  import newArrival from "../components/newArrival";
  import Coupon from "../components/coupon";
  import AdressQuote from "../components/adressQuote";
  import cartItems from "../components/cartItems";
  import {mapGetters, mapActions} from "vuex";
  export default {
    name: "Cart",
    components: {
      AdressQuote,
      Coupon,
      newArrival,
      cartItems
    },
    computed: mapGetters(['allItemsInBasket', 'total']),
    methods : mapActions(['clearCart'])
  }
</script>

<style scoped>

</style>