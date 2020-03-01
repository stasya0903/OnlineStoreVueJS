<template>
 <div>
   <div class="mayLike__header bold">you may like also</div>
   <div class="mayLike__products">
     <product v-for="item of mayLikeProducts"
              :item="item"
              :key="item.product_id"
              @addProduct="addProduct({item, quantity:1})" >

     </product>
   </div>
 </div>
</template>

<script>
  import {mapActions, mapGetters} from "vuex";
    import product from "./product";

    export default {
        name: "youMayLike",
      components: {
          product
      },
      computed: mapGetters(['mayLikeProducts', 'featuredProducts', 'allItemsInBasket', 'getItemInBasket'])

     ,
      data(){
          return {
            publicPath: process.env.BASE_URL
          }
      },
      methods: {
        ...mapActions(['addProduct']),

      },
    }
</script>

<style scoped>

</style>