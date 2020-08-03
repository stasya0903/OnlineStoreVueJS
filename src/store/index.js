import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    api: `https://onlinestoreonvue.herokuapp.com/api/`,
    products: [],
    itemsInBasket: [],


  },
  mutations: {
    getItemsInBasket(state, data) {
      for (let el of data.contents) {
        state.itemsInBasket.push(el);
      }
    },
    getAllProducts(state, data) {
      for (let el of data) {
        state.products.push(el);
      }
    },
    deleteItemFromBasket(state, item) {
      state.itemsInBasket.splice(state.itemsInBasket.indexOf(item), 1)
    },
    updateQuantityOfItem(state, args) {
      let find = state.itemsInBasket.find(el => el.id_product === args.id_product);

      find.quantity += args.quantity;


    },

    addItemToBasket(state, item) {
      state.itemsInBasket.push(item);
    }

  },
  actions: {
    async getJson(ctx, args) {
      const result = await fetch(args.api);
      const data = await result.json();
      switch (args.action) {
        case "getItemsInBasket":
          ctx.commit('getItemsInBasket', data);
          break;
        case "getAllProducts":
          ctx.commit('getAllProducts', data);
          break;

      }

    },
    async deleteJson(ctx, args) {
      const result = await fetch(args.api, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(args.item)
      });
      const data = await result.json();
      if (data.result) {
        ctx.commit('deleteItemFromBasket', args.item)
      }
    },
    async putJson(ctx, args) {
      let body = {quantity: args.quantity};
      console.log(args.quantity);
      const result = await fetch(`${ctx.state.api}cart/${args.id_product}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
      });
      const data = await result.json();
      if (data.result) {
        ctx.commit('updateQuantityOfItem', args)
      }
    },
    async postJson(ctx, itemInCart) {
      const result = await fetch(`${ctx.state.api}cart`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(itemInCart)
      });
      const data = await result.json();
      if (data.result) {
        ctx.commit('addItemToBasket', itemInCart)
      }
    },
    addProduct(ctx, args) {
      let find = ctx.state.itemsInBasket.find(el => el.id_product === args.item.id_product);
      if (find) {
        ctx.dispatch('putJson', {id_product: args.item.id_product, quantity: args.quantity})
      } else {
        let itemInCart = Object.assign({quantity: args.quantity}, args.item);
        ctx.dispatch('postJson', itemInCart)
      }

    },
    deleteItem(ctx, item) {
      if (item.quantity <= 1) {
        ctx.dispatch('deleteJson', {api: `${ctx.state.api}cart`, item: item});
      } else {

        ctx.dispatch('putJson', {id_product: item.id_product, quantity: -1})

      }
    },
    changeQuantity(ctx, args) {
      let quantity = args.val - args.item.quantity;

      ctx.dispatch('putJson', {id_product: args.item.id_product, quantity})
    },
    clearCart(ctx) {
      for (let item of ctx.state.itemsInBasket) {
        ctx.dispatch('deleteJson', {api: `${ctx.state.api}cart`, item: item});
      }
    }
  },
  modules: {},
  getters: {
    allItemsInBasket(state) {
      return state.itemsInBasket;
    },
    amount(state) {
      return state.itemsInBasket.length;
    },
    total(state) {
      return state.itemsInBasket.reduce((sum, el) => sum + el.price * el.quantity, 0);
    },
    getProductById: state => id => {
      return state.products.find(el => el.id_product === id);
    },
    allProducts(state) {

      return state.products;
    },
    featuredProducts(state) {
      return state.products.filter((el) => el.id_product % 2 === 0)
    },
    mayLikeProducts(state) {
      let position1 = Math.floor(Math.random() * state.products.length);
      let position2 = position1 + 4;
      return state.products.slice(position1, position2);
    }

  }
});
