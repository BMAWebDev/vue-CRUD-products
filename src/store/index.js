import { defineStore } from 'pinia';

export const productsStore = defineStore({
  id: 'products',
  persist: true,
  state: () => ({
    createdProduct: null,
  }),
  actions: {
    setCreatedProduct(product) {
      this.createdProduct = product;
    },
  },
});
