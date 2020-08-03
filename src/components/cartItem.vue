<template>
  <tr class="table_colums">
    <td class="table_choosen rows row_product">

      <div class="row_img"><img :src="require(`@/assets/img_row1.png`)" alt=""></div>
      <div class="row_text">
        <a href="#"><p class="row_text product_name">Mango People T-shirt</p></a>

        <p class="row_text color"><span class="bold">Color</span>: Red</p>
        <p class="size"><span class="bold">Size</span>: Xll </p>
      </div>
    </td>
    <td class="table_choosen rows row_prise"> {{item.price}}</td>
    <td class="table_choosen rows row_quantity">{{item.quantity}}</td>
    <td class="table_choosen rows row_shipping">  free</td>
    <td class="table_choosen rows row_subtotal">{{item.price * item.quantity}}</td>
    <td class="table_choosen rows row_action">
      <div class="changeQty">
        <font-awesome-icon
                @click="$emit('addProduct', item)"
                id="MoreBtn" class="fas fa-times-circle btnPressEffect"
                :icon="['fas', 'plus-circle']"/>
        <font-awesome-icon
                @click="$emit('deleteItem', item)"
                id="LessBtn" class="fas fa-times-circle btnPressEffect"
                :icon="['fas', 'minus-circle']"/>
      </div>
    </td>
  </tr>
</template>

<script>
  export default {
    name: "cartItem",
    props: {
      item: Object

    },
  }
</script>

<style scoped>

</style>
