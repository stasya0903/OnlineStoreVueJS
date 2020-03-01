<template>
  <div>
    <div class="promo">
      <div class="container promo-content">
        <div class="promo__content">
          <p class="promo__big">THE BRAND</p>
          <p class="promo__mini">OF LUXERIOUS <span class="pink">FASHION</span></p>
        </div>
      </div>
    </div>
    <div class="hotdeal__container">
      <div class="hotdeal_A">
        <div class="formen">
          <div class="hotdeal">
            <p class="blacksmall">hOT dEAL
            </p>
            <p class="pinkbig">
              FOR MEN</p>

          </div>
        </div>
        <div class="accs">
          <div class="hotdeal">
            <p class="blacksmall">LUXIROUS & trendy
            </p>
            <p class="pinkbig">
              ACCESORIES</p>
          </div>


        </div>
      </div>
      <div class="hotdeal_B">
        <div class="women">
          <div class="hotdeal">
            <p class="blacksmall">30% offer
            </p>
            <p class="pinkbig">
              women</p>
          </div>


        </div>
        <div class="kids">

          <div class="hotdeal">
            <p class="blacksmall">new arrivals
            </p>
            <p class="pinkbig">
              FOR kids</p>
          </div>

        </div>
      </div>
    </div>
    <div class="container__featured">
      <p class="featured">Featured Items</p>
      <p class="simple_text">Shop for items based on what we featured in this week</p>
    </div>
    <products class="container product_box"></products>
    <div class="brouseall_container">
      <router-link to="/catalog">
        <div class="button pulsate-fwd">Browse All Product <i class="fas fa-long-arrow-alt-right"></i></div>
      </router-link>
    </div>
    <div class="container banner">
      <div class="discount_offer">
        <div class="offer_text">
          <p class="discount_offer1">30% <span class="pink"> OFFER</span></p>
          <p class="discount_offer2">FOR WOMEN</p>
        </div>
      </div>
      <div class="hotoffers">
        <div class="offer">
          <div class="ofer_image"><img src="img/offer1.svg" alt="">
          </div>
          <div class="text">
            <p class="offer_head">Free Delivery</p>
            <p class="offer_promo">Worldwide delivery on all. Authorit tively morph next-generation innov tion
              with extensive models.</p>
          </div>
        </div>
        <div class="offer">
          <div class="ofer_image"><img src="img/offer2.svg" alt=""></div>
          <div class="text">
            <p class="offer_head">Sales & discounts</p>
            <p class="offer_promo">Worldwide delivery on all. Authorit tively morph next-generation innov tion
              with extensive models.</p>
          </div>
        </div>
        <div class="offer last_offer">
          <div class="ofer_image"><img src="img/offer3.png" alt=""></div>
          <div class="text">
            <p class="offer_head">Quality assurance</p>
            <p class="offer_promo">Worldwide delivery on all. Authorit tively morph next-generation innov tion
              with extensive models.</p>
          </div>
        </div>

      </div>
    </div>
    <subscribe></subscribe>
  </div>

</template>

<script>
  // @ is an alias to /src
  import products from '@/components/products.vue';
  import subscribe from '@/components/subscribe.vue';

  export default {
    name: 'Home',
    components: {
      products,
      subscribe

    },
  };
</script>
