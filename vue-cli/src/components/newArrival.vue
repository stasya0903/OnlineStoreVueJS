<template>
  <div class="new_arrival">
    <div class="container new_arrivals">

      <div class="new_arrivals_left">NEW ARRIVALS</div>
      <div class="new_arrivals_right">
        <router-link to="/" class="nav_arrival">HOME</router-link>/
        <router-link to="/catalog" class="nav_arrival">MEN</router-link>/
        <router-link to="/catalog" class="nav_arrival">NEW ARRIVALS</router-link>
      </div>

    </div>
  </div>
</template>

<script>
    export default {
        name: "newArrival"
    }
</script>

<style scoped>

</style>