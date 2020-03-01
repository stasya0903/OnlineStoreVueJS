<template>

  <div>
    <new-arrival></new-arrival>
    <main>
      <div class="product-imgBig">
        <div class="navArrow"><i class="fas fa-chevron-left"></i></div>
        <img class="product-imgBig__img" :src="require(`@/assets/product-bigImg.jpg`)" alt="">
        <div class="navArrow"><i class="fas fa-chevron-right"></i></div>
      </div>
      <article class="container product-infoBig">
        <div class="product-infoBig__upper">
          <p class="collection product-infoBig__collection pink">WOMEN COLLECTION</p>
          <div class="divider"></div>
          <p class="product-infoBig__name">{{item.product_name}}</p>
          <div class="rating product-infoBig__rating rating_tight">
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
            <i class="fas fa-star"></i>
          </div>
          <p class="description product-infoBig__description">Compellingly actualize fully
            researched processes before proactive outsourcing.
            Progressively syndicate collaborative architectures before
            cutting-edge services. Completely visualize parallel
            core competencies rather than exceptional portals.
          </p>
          <div class="shortInfo">
            <p class="material"><span class="grey">MATERIAL:</span> COTTON</p>
            <span class="shortInfo__space"></span>
            <p class="designer"><span class="grey">DESIGNER:</span> BINBURHAN</p>
          </div>
          <p class="product-infoBig__price">$561</p>
        </div>
        <div class="product-infoBig__down">
          <div class="sort">
            <div class="sort__sortOption sort__color">
              <legend class="sort_legend">CHOOSE COLOR</legend>
              <input list="product-colors-avaliable" class="sortInput sortInput__color"
                     placeholder="Red"/>
              <span class="sortInput__arrowDown"><i class="fas fa-chevron-down"></i></span>
              <div class="colorBox colorBox_red"></div>
              <datalist name="color" id="product-colors-avaliable">
                <span class="color"> </span>
                <option class="pink" value="Green"></option>
              </datalist>
            </div>
            <div class="sort__sortOption">
              <legend class="sort_legend">CHOOSE SIZE</legend>
              <input list="product-size-available" class="sortInput" placeholder="XXL"/>
              <span class="sortInput__arrowDown"><i class="fas fa-chevron-down"></i></span>
              <datalist name="color" id="product-size-available">
                <span class="color"> </span>
                <option value="XXL"></option>
                <option value="S"></option>
              </datalist>
            </div>
            <div class="sort__sortOption">
              <legend class="sort_legend">QUANTITY</legend>
              <input input type="number"  min="1" max="100" v-model="newQuantity" class="sortInput" placeholder="2"/>
            </div>
          </div>
          <div @click="addProduct({item, quantity: +newQuantity})"class="addToCart btnWhiteEffects">
            <img class="productBig__cart" :src="require(`@/assets/cartPink.svg`)" alt="">
            <span >Add to Cart</span>
          </div>
        </div>
      </article>

    </main>
    <you-may-like class="container mayLike mayLike__singleProduct"> </you-may-like>
    <subscribe></subscribe>

  </div>


</template>

<script>
  import NewArrival from "../components/newArrival";
  import Subscribe from "../components/subscribe";
  import YouMayLike from "../components/youMayLike";
  import {mapActions, mapGetters} from "vuex";


  export default {
    name: "singleProductPage",
    components: {
      YouMayLike,
      Subscribe,
      NewArrival
    },
    data(){
      return {

        api: `http://localhost:3030/api/products`,
        newQuantity: 1,

      }
    },
    computed: {
   item() {
        return this.$store.getters.getProductById(+this.$route.params.id);
      }

      },
    methods: {
      ...mapActions(["getAllProducts", "getJson", 'postJson', 'deleteJson', 'addProduct']),

    },

  }
</script>

<style scoped>

</style>
