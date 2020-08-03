<template>
  <table class="container table_choosen">
    <tr class="table_colums colums_heading ">
      <td class="rows row_product  row_productfirst"> Product Details</td>
      <td class="rows row_prise row_productfirst"> unite Price</td>
      <td class="rows row_quantity row_productfirst"> Quantity</td>
      <td class="rows row_shipping row_productfirst"> shipping</td>
      <td class="rows row_subtotal row_productfirst"> Subtotal</td>
      <td class="rows row_action row_productfirst"> ACTION</td>
    </tr>
    <cartItem
      v-for="item of allItemsInBasket"
      :item="item"
      :key="item.product_id"
      @deleteItem="deleteItem"
    @addProduct="addProduct({item, quantity:1})">
    </cartItem>
  </table>

</template>

<script>
  import {mapActions, mapGetters, mapMutations} from "vuex";
  import cartItem from "./cartItem";

    export default {
      name: "cartItems",
      components: {
       cartItem

      },
      computed: mapGetters(['allItemsInBasket']),
      methods: {
        ...mapActions([ 'addProduct',"deleteItem", "changeQuantity"]),

      },

      async mounted() {
        this.getJson({api:this.api, action:'getItemsInBasket'});

      }
    }

</script>

<style scoped>

</style>
