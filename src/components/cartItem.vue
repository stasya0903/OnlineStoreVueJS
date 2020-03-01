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
    <td class="table_choosen rows row_quantity"><p class="pink" v-show="error">{{error}}</p><input type="number"  min="1" max="100" v-model="newQuantity"  @input="change/*$emit('changeQuantity', {item, newQuantity})*/"  class="qty" ></td>
    <td class="table_choosen rows row_shipping"> free</td>
    <td class="table_choosen rows row_subtotal">{{item.price * newQuantity}}</td>
    <td class="table_choosen rows row_action">
      <font-awesome-icon @click="$emit('deleteItem', item)" id="deleteBtn" class="fas fa-times-circle btnPressEffect" :icon="['fas', 'times-circle']"/>
      </td>
  </tr>
</template>

<script>
  export default {
    name: "cartItem",
    data() {
      return {
          error:"",
          oldQty: this.item.quantity,

      }
    },
    props: {
      item: Object

    },
    methods: {


    },
    computed:{
      newQuantity:{
        get(){

            return +this.item.quantity
        },
        set(val){
         if ((val === "")){
            this.error = ""
          }
          else if(isNaN(val) || val <= 0 || val > 100){
            this.error = 'input correct amount of the items from 1 to 100'
          } else {
            this.error = '';
            this.$emit('changeQuantity', {item: this.item, val});
          }

        }

      }
    },
    mounted: {
      setQty(){
        this.oldQty = this.item.quantity
      }
    }

  }
</script>

<style scoped>

</style>
