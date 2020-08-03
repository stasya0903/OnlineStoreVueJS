<template>
  <div >
    <product
      v-for="item of allProducts"
      :item="item"
      :key="item.product_id"
      @addProduct="addProduct({item, quantity:1})">
    </product>
  </div>
</template>

<script>
  import {mapActions, mapGetters, mapMutations} from "vuex";
  import product from "./product";

    export default {
      name: "products",
      props: ['classForContainer'],
      components: {
        product

      },
      data() {
        return {
          api: `https://onlinestoreonvue.herokuapp.com/api/`,

        }
      },
      computed: mapGetters(['allProducts', 'featuredProducts', 'allItemsInBasket', 'getItemInBasket']),
      methods: {
        ...mapActions(["getAllProducts", 'getJson', 'addProduct']),

      },

      async mounted() {
        this.getJson({api:this.api, action:"getAllProducts"});

      }
    }

</script>

<style scoped>

</style>
