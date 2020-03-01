<template>
  <article>
    <div class="featured_content">
      <router-link :to="{name: 'singleProductPage', params: {id: item.id_product}}"><img class="product_image" :src="require(`@/assets/featured1.jpg`)"
                                     alt="productphoto"></router-link>
      <div class="product_text">
        <router-link :to="{name: 'singleProductPage', params: {id: item.id_product}}" class="product_link">{{item.product_name}}</router-link>
        <p class="price">$ {{item.price}}</p>
      </div>
      <button @click="$emit('addProduct', item)" class="product_add " id="product_add">
        <img class="cart product__cart" :src="require(`@/assets/card.svg`)" alt="">
        Add to Cart
      </button>

    </div>
  </article>
</template>

<script>
  export default {
    name: "product",
    props: {
      item: Object
    },

  }
</script>

<style scoped>

</style>
