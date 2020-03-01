<template>
  <div>
  <legend class="adress adress_heading">Shipping Adress</legend>
  <input list="cities-opttions-avaliable" class="adress checkout_input adress__city"
         placeholder="Bangladesh"/>
  <datalist id="cities-opttions-avaliable">
    <option value="Bangladesh"></option>
  </datalist>
  <input class="adress checkout_input adress_state" type="text" placeholder="State">
  <input class="adress checkout_input adress_state" type="text" placeholder="Postcode/Zip">
  <button class="checkout_button checkout_button__coupon btnWhiteEffects">get a quote</button>
  </div>
</template>

<script>
    export default {
        name: "adressQuote"
    }
</script>

<style scoped>

</style>