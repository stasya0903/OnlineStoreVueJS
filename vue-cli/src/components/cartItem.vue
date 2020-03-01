<template>
  <article>
    <div class="featured_content">
      <a href="singlePage.html"><img class="product_image" src="img/featured1.jpg"
                                     alt="productphoto"></a>
      <div class="product_text">
        <a href="singlePage.html" class="product_link">{{item.product_name}}</a>
        <p class="price">$ {{item.price}}</p>
      </div>
      <button @click="$emit('addProduct', item)" class="product_add " id="product_add">
        <img class="cart product__cart" src="img/card.svg" alt=""><img src="img/" alt="">
        Add to Cart
      </button>

    </div>
  </article>
</template>

<script>
  export default {
    name: "product",
    data() {
      return {

      }
    },
    props: {
      item: Object
    }
  }
</script>

<style scoped>

</style>