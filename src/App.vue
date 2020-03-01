<template>
  <div id="app">
    <!--<error ref="error"></error>-->
    <header class="header">
      <div class="container header__flex">
        <div class="header__left">
          <router-link class="logo" to="/">
            <img :src="require(`@/assets/logo.png`)" alt="logo" class="brand_img">
            BRAN <span class="pink bold"> D</span></router-link>
          <form class="header__form" action="#">
            <div class="browse">Browse
              <span class="browse__arrow"><i class="fas fa-sort-down"></i></span>
              <div class="drop browse__drop drop_flex-column">
                <div class="drop__flex">
                  <h3 class="drop__heading">WOMEN</h3>
                  <ul class="drop_menu">
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Dresses</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Tops</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Sweaters/Knits</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Jackets/Coats</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Blazers</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Denim</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Leggings/Pants</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Skirts/Shorts</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Accessories</router-link>
                    </li>
                  </ul>

                </div>
                <div class="drop__flex">
                  <h3 class="drop__heading">MEN</h3>
                  <ul class="drop_menu">
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Tops</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Sweaters/Knits</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Jackets/Coats</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Blazers</router-link>
                    </li>
                    <li class="li">
                      <router-link class="drop_link" to="/catalog">Denim</router-link>
                    </li>
                  </ul>
                </div>

              </div>
            </div>
            <input type="text" placeholder="Search for Item..." class="form__input">
            <button type="submit" class="form_button btnWhiteEffects">
              <font-awesome-icon class="fas fa-search" :icon="['fas', 'search']"/>
            </button>
          </form>
        </div>
        <Cart ref="CartDrop"></Cart>


      </div>

    </header>
    <nav>
      <ul class="menu">
        <li class="menu__list">
          <router-link to="/" class="menu__link">Home</router-link>
        </li>
        <li class="menu__list">
          <router-link to="/catalog" class="menu__link">Man</router-link>
        </li>
        <li class="menu__list">
          <router-link to="/catalog" class="menu__link">Women</router-link>
          <div class="drop menu__drop ">
            <div class="drop__flex">
              <h3 class="drop__heading">WOMEN</h3>
              <ul class="drop_menu">
                Dresses
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Tops</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Sweaters/Knits</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Jackets/Coats</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Blazers</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Denim</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Leggings/Pants</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Skirts/Shorts</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Accessories</router-link>
                </li>


              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__heading">WOMEN</h3>
              <ul class="drop_menu">
                Dresses
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Tops</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Sweaters/Knits</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Jackets/Coats</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Blazers</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Denim</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Leggings/Pants</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Skirts/Shorts</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Accessories</router-link>
                </li>

              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__heading">WOMEN</h3>
              <ul class="drop_menu">
                Dresses
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Tops</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Sweaters/Knits</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Jackets/Coats</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Blazers</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Denim</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Leggings/Pants</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Skirts/Shorts</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Accessories</router-link>
                </li>


              </ul>
            </div>
          </div>
        </li>
        <li class="menu__list">
          <router-link to="/catalog" class="menu__link">Kids</router-link>
        </li>
        <li class="menu__list">
          <router-link to="/catalog" class="menu__link">Accoseriese</router-link>
        </li>
        <li class="menu__list">
          <router-link to="/catalog" class="menu__link">Featured</router-link>
        </li>
        <li class="menu__list">
          <router-link to="/catalog" class="menu__link">Hot Deals</router-link>
          <div class="drop menu__drop_last">
            <div class="drop__flex">
              <h3 class="drop__heading">WOMEN</h3>
              <ul class="drop_menu">

                <li class="li">
                  <router-link class="drop_link" to="/catalog">Tops</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Sweaters/Knits</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Jackets/Coats</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Blazers</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Denim</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Legg/Pants</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Skirts/Shorts</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Accessories</router-link>
                </li>


              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__heading">WOMEN</h3>
              <ul class="drop_menu">
                Dresses
                <li class="li">
                  <router-link class="drop_link" href="catalog.html">Tops</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" href="catalog.html">Sweaters/Knits</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" href="catalog.html">Jackets/Coats</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" href="catalog.html">Blazers</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" href="catalog.html">Denim</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" href="catalog.html">Leggings/Pants</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" href="catalog.html">Skirts/Shorts</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" href="catalog.html">Accessories</router-link>
                </li>


              </ul>
            </div>
            <div class="drop__flex">
              <h3 class="drop__heading">WOMEN</h3>
              <ul class="drop_menu">
                Dresses
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Tops</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Sweaters/Knits</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Jackets/Coats</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Blazers</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Denim</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Leggings/Pants</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Skirts/Shorts</router-link>
                </li>
                <li class="li">
                  <router-link class="drop_link" to="/catalog">Accessories</router-link>
                </li>


              </ul>
            </div>
          </div>
        </li>
      </ul>
    </nav>
    <router-view/>
    <footer>
      <div class="footer_big">
        <div class="container footer_big__container">
          <div class="brand_info">
            <router-link class="logo logo_footer" to="/"><img :src="require(`@/assets/logo.png`)" alt="logo"
                                                              class="brand_img">BRAN
              <span
                class="pink bold">D</span></router-link>
            <div class="text_object">
              <p class="object1">Objectively transition extensive data rather than cross functional
                solutions.
                Monotonectally syndicate multidisciplinary materials before go forward benefits.
                Intrinsicly
                syndicate an expanded array of processes and cross-unit partnerships.</p>

              <p class="object2"> Efficiently plagiarize 24/365 action items and focused
                infomediaries.
                Distinctively seize superior initiatives for wireless technologies. Dynamically
                optimize.

              </p>
            </div>

          </div>
          <div class="category">
            <nav class="nav_footer">

              <div class="nav_category first_cat">
                <p class="nav_head">Company</p>
                <ul class="nav_list">
                  <router-link to="/">
                    <li class="nav_li">Home</li>
                  </router-link>
                  <router-link to="/">
                    <li class="nav_li">Shop</li>
                  </router-link>
                  <router-link to="/">
                    <li class="nav_li">About</li>
                  </router-link>
                  <router-link to="/">
                    <li class="nav_li">How it Works</li>
                  </router-link>
                  <router-link to="/">
                    <li class="nav_li">Contact</li>
                  </router-link>
                </ul>

              </div>
              <div class="nav_category">
                <p class="nav_head">INFORMATION</p>
                <ul class="nav_list">
                  <li class="nav_li">Tearms & Condition</li>
                  <li class="nav_li"> Privacy Policy</li>
                  <li class="nav_li">How to Buy</li>
                  <li class="nav_li"> How to Sell</li>
                  <li class="nav_li">Promotion</li>
                </ul>

              </div>
              <div class="nav_category">
                <p class="nav_head">SHOP CATEGORY</p>
                <ul class="nav_list">
                  <router-link to="/catalog">
                    <li class="nav_li ">Men</li>
                  </router-link>
                  <router-link to="/catalog">
                    <li class="nav_li">Women</li>
                  </router-link>
                  <router-link to="/catalog">
                    <li class="nav_li">Child</li>
                  </router-link>
                  <router-link to="/catalog">
                    <li class="nav_li">Apparel</li>
                  </router-link>
                  <router-link to="/catalog">
                    <li class="nav_li">Brows All</li>
                  </router-link>
                </ul>

              </div>

            </nav>
          </div>
        </div>
      </div>
      <div class="footer_small">

        <div class="container footer_small__container">
          <div class="footer_right">© 2017 Brand All Rights Reserved.</div>
          <div class="footer_left">
            <div class="social_links">
              <a class="solial_link">
                <font-awesome-icon :icon="['fab', 'facebook-f']"/>
                <i class="fab fa-facebook-f"></i></a>
              <a class="solial_link">
                <font-awesome-icon :icon="['fab', 'twitter']"/>
                <i class="fab fa-twitter"></i></a>
              <a class="solial_link"><i class="fab fa-linkedin-in"></i>
                <font-awesome-icon :icon="['fab', 'linkedin-in']"/>
              </a>
              <a class="solial_link">
                <font-awesome-icon :icon="['fab', 'pinterest-p']"/>
                <i class="fab fa-pinterest-p"></i></a>
              <a class="solial_link"><i class="fab fa-google-plus-g"></i>
                <font-awesome-icon :icon="['fab', 'google-plus-g']"/>
              </a>
            </div>
          </div>
        </div>

      </div>

    </footer>
  </div>
</template>

<script>
  // @ is an alias to /src
  import Cart from '@/components/CartDrop.vue';
  import {mapActions} from "vuex";


  export default {
    components: {
      Cart,
    },
    methods: {
      ...mapActions(["getAllProducts", 'getJson', 'addProduct']),

    },

    async mounted() {
      this.getJson({api: this.api, action: "getAllProducts"});

    }

  };
</script>
