<template>
  <div>
    <new-arrival></new-arrival>
  <main>
    <div class="checkout container">
      <div class="checkout__step"><span class="step__number">01.</span>Shipping Adress
        <div class="step__info">
          <div class="info__address checkout__text">
            <form action="#">
              <div class="checkout_p">
                <p class="checkout__header">Check as a guest or register.</p>
                <p>Register with us for future convenience</p>
              </div>
              <div class="checkout_p checkout__radio checkout__header">
                <p>
                  <input type="radio" id="asGuest" name="radio" value="1">
                  <label for="asGuest">checkout as guest </label>
                </p>
                <p>
                  <input type="radio" id="registerAs" name="radio" value="2">
                  <label for="registerAs">register</label>
                </p>
              </div>
              <div class="checkout_p">
                <p class="checkout__header">register and save time!</p>
                <p>Register with us for future convenience</p>
              </div>
              <div class="checkout_p">
                <p><span class="double_right"><i class="fas fa-chevron-right"></i><i
                  class="fas fa-chevron-right"></i></span>Fast and easy checkout</p>
                <p><span class="double_right"><i class="fas fa-chevron-right"></i><i
                  class="fas fa-chevron-right"></i></span>Easy access to your order history and status
                </p>
              </div>
              <div class="chekout_p btn_continue">
                <input class="cart_drop_btn btnWhiteEffects" type="submit" value="Continue">
              </div>


            </form>

          </div>
          <div class="info__address checkout__text">
            <div class="checkout_p">
              <p class="checkout__header">Already registed?</p>
              <p>Please log in below</p>
            </div>
            <form action="#">
              <div class="checkout_p">

                <p class="checkout__header"><label for="emailAddress">EMAIL ADDRESS <span
                  class="pink">*</span></label></p>
                <p><input class="checkout__input" type="text" id="emailAddress"></p>
              </div>
              <div class="checkout_p">
                <p class="checkout__header"><label for="password">password <span class="space"></span> <span
                  class="pink">*</span></label></p>
                <p><input class="checkout__input" type="password" id="password"></p>
                <p class="pink required">* Required Fileds</p>
              </div>

              <div class="checkout_p checkout_p_flex">
                <input class="cart_drop_btn btn_continue btnWhiteEffects" type="submit" value="Log in">
                <p class="forgotPwd">Forgot Password ?</p>
              </div>
            </form>

          </div>
        </div>
      </div>
      <div class="checkout__step"><span class="step__number">02.</span>BILLING INFORMATION</div>
      <div class="checkout__step"><span class="step__number">03.</span> SHIPPING INFORMATION</div>
      <div class="checkout__step"><span class="step__number">04.</span> SHIPPING METHOD</div>
      <div class="checkout__step"><span class="step__number">05.</span> PAYMENT METHOD</div>
      <div class="checkout__step"><span class="step__number">06.</span> ORDER REVIEW</div>


    </div>
  </main>
    <subscribe></subscribe>
  </div>
</template>

<script>
    import NewArrival from "../components/newArrival";
    import Subscribe from "../components/subscribe";
    export default {
        name: "Checkout",
      components: {Subscribe, NewArrival}
    }
</script>

<style scoped>

</style>