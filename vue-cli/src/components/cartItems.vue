<template>
  <div >
    <product
      v-for="item of allProducts"
      :item="item"
      :key="item.product_id"
      @addProduct="addProduct">
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
          api: `http://localhost:3030/api/products`,

        }
      },
      computed: mapGetters(['allProducts', 'featuredProducts', 'allItemsInBasket', 'getItemInBasket']),
      methods: {
        ...mapActions(["getJson", "putJson", 'postJson', 'deleteJson', 'addProduct']),

      },

      async mounted() {
        this.getJson({api:this.api, action:"getAllProducts"});

      }
    }

</script>

<style scoped>

</style>