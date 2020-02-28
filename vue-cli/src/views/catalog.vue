<template>
  <div>
    <newArrival></newArrival>
    <main class="container main_product">
      <nav class="menu_options">
        <div class="menu_option">
          <p class="category_menu">Category</p>
          <i class="fas fa-sort-down option__arrow option__arrow_down"></i>
          <i class="fas fa-sort-down option__arrow option__arrow_up"></i>
        </div>
        <div class="drop_down_options">
          <ul class="drop_down">
            <li class="items_drop">Accessories</li>
            <li class="items_drop">Bags</li>
            <li class="items_drop">Denim</li>
            <li class="items_drop">Hoodies & Sweatshirts</li>
            <li class="items_drop">Jackets & Coats</li>
            <li class="items_drop">Pants</li>
            <li class="items_drop">Polos</li>
            <li class="items_drop">Shirts</li>
            <li class="items_drop">Shoes</li>
            <li class="items_drop">Shorts</li>
            <li class="items_drop">Sweaters & Knits</li>
            <li class="items_drop">T-Shirts</li>
            <li class="items_drop">Tanks</li>

          </ul>
        </div>


        <div class="menu_option">
          <p class="category_menu">Brand</p>
          <i class="fas fa-sort-down option__arrow option__arrow_down"></i>
          <i class="fas fa-sort-down option__arrow option__arrow_up"></i>
        </div>
        <div class="drop_down_options">
          <ul class="drop_down">
            <li class="items_drop">Accessories</li>
            <li class="items_drop">Bags</li>
            <li class="items_drop">Denim</li>
            <li class="items_drop">Hoodies & Sweatshirts</li>
            <li class="items_drop">Jackets & Coats</li>
            <li class="items_drop">Pants</li>
            <li class="items_drop">Polos</li>
            <li class="items_drop">Shirts</li>
            <li class="items_drop">Shoes</li>
            <li class="items_drop">Shorts</li>
            <li class="items_drop">Sweaters & Knits</li>
            <li class="items_drop">T-Shirts</li>
            <li class="items_drop">Tanks</li>

          </ul>
        </div>
        <div class="menu_option">
          <p class="category_menu">Designer</p>
          <i class="fas fa-sort-down option__arrow option__arrow_down"></i>
          <i class="fas fa-sort-down option__arrow option__arrow_up"></i>
        </div>
        <div class="drop_down_options">
          <ul class="drop_down">
            <li class="items_drop">Accessories</li>
            <li class="items_drop">Bags</li>
            <li class="items_drop">Denim</li>
            <li class="items_drop">Hoodies & Sweatshirts</li>
            <li class="items_drop">Jackets & Coats</li>
            <li class="items_drop">Pants</li>
            <li class="items_drop">Polos</li>
            <li class="items_drop">Shirts</li>
            <li class="items_drop">Shoes</li>
            <li class="items_drop">Shorts</li>
            <li class="items_drop">Sweaters & Knits</li>
            <li class="items_drop">T-Shirts</li>
            <li class="items_drop">Tanks</li>

          </ul>
        </div>
      </nav>
      <div class="catalog">
        <div class="form_options">
          <div class="form_opt">
            <p class="form_heading">Trending now</p>
            <div class="form_opt_menu">
              <a href="#" class="form_opt_menu_opts">Bohemian</a>
              <p class="form_slash">|</p>
              <a href="#" class="form_opt_menu_opts">Floral </a>
              <p class="form_slash">|</p>
              <a href="#" class="form_opt_menu_opts">Lace </a>
              <a href="#" class="form_opt_menu_opts">Floral </a>
              <p class="form_slash">|</p>
              <a href="#" class="form_opt_menu_opts">Lace </a>
              <p class="form_slash">|</p>
              <a href="#" class="form_opt_menu_opts">Bohemian</a>


            </div>
          </div>
          <div class="form_opt">
            <p class="form_heading">SIZE</p>
            <div class="form_opt_sizes">
              <div class="form_opt_size">
                <input type="checkbox" id="XXS">
                <label class="size_value" for="XXS">XXS</label>
              </div>
              <div class="form_opt_size">
                <input type="checkbox" id="XS" class="form_opt_size">
                <label class="size_value" for="XS">XS</label>
              </div>
              <div class="form_opt_size">
                <input type="checkbox" id="S" class="form_opt_size">
                <label class="size_value" for="S">S</label>
              </div>
              <div class="form_opt_size">
                <input type="checkbox" id="M" class="form_opt_size">
                <label class="size_value" for="M">M</label>
              </div>
              <div class="form_opt_size">
                <input type="checkbox" id="L" class="form_opt_size">
                <label class="size_value" for="L">L</label>
              </div>
              <div class="form_opt_size">
                <input type="checkbox" id="XL" class="form_opt_size">
                <label class="size_value" for="XL">XL</label>
              </div>
              <div class="form_opt_size">
                <input type="checkbox" id="XXL" class="form_opt_size">
                <label class="size_value" for="XXL">XXL</label>
              </div>


            </div>
          </div>
          <div class="form_opt">
            <p class="form_heading">PRICE</p>
            <input type="range" class="size" min="0" max="100" value="25">
            <div class="label">
              <p class="min_max">$52</p>
              <p class="min_max">$400</p>
            </div>


          </div>


        </div>
        <div class="sorting">
          <div class="sortby">
            <div class="sortby_menu">Sort By</div>
            <input list="sort-By" class="sortby__options adress__city" placeholder="Name"/>
            <datalist name="city" id="sort-By">
              <option value="name"></option>
            </datalist>

          </div>

          <div class="show">
            <div class="show_size">Show</div>
            <input list="showNumber" class="showNumber" placeholder="09">
            <datalist id="showNumber">
              <option value="09"></option>
            </datalist>
          </div>
        </div>

        <products class="catolog_products"></products>
        <div class="product_pages">
          <div class="page_number">
            <a href="#" class="pages"><i class="fas fa-chevron-left"></i></a>
            <a href="#" class="pages">1</a>
            <a href="#" class="pages">2</a>
            <a href="#" class="pages">3</a>
            <a href="#" class="pages">4</a>
            <a href="#" class="pages">5</a>
            <a href="#" class="pages">6.....20</a>
            <a href="#" class="pages"><i class="fas fa-chevron-right"></i></a>
          </div>


          <button class="view_all btnWhiteEffects">View All</button>

        </div>


      </div>
    </main>
    <div class="special_offers special_offers_black">
      <div class="hotoffers_black">
        <div class="offer_black">
          <div class="ofer_image_black"><img src="img/offer1.svg" alt="">
          </div>
          <div class="text text_black">
            <p class="offer_head_black">Free Delivery</p>
            <p class="offer_promo black_offer">Worldwide delivery on all. Authorit tively morph
              next-generation
              innov tion with extensive models.</p>
          </div>
        </div>
        <div class="offer_black">
          <div class="ofer_image_black"><img src="img/offer2.svg" alt=""></div>
          <div class="text text_black">
            <p class="offer_head_black ">Sales & discounts</p>
            <p class="offer_promo black_offer">Worldwide delivery on all. Authorit tively morph
              next-generation
              innov tion with extensive models.</p>
          </div>
        </div>
        <div class="offer_black">
          <div class="ofer_image_black"><img src="img/offer3.png" alt=""></div>
          <div class="text text_black">
            <p class="offer_head_black ">Quality assurance</p>
            <p class="offer_promo black_offer">Worldwide delivery on all. Authorit tively morph
              next-generation
              innov tion with extensive models.</p>
          </div>
        </div>
      </div>
    </div>
    <subscribe class="catalog__subscribe"></subscribe>
  </div>
</template>

<script>
  import newArrival from "@/components/newArrival";
  import products from "@/components/products";
  import subscribe from '@/components/subscribe.vue';

  export default {
    name: "catalog",
    components: {
      newArrival,
      products,
      subscribe
    },
    async mounted() {
      this.getJson({api: this.api, action: "getAllProducts"});

    }
  }
</script>

<style scoped>

</style>