<template>
  <div class="container">
    <h1>homepage</h1>
    <router-link to="/products">to the products page</router-link>

    <div v-if="createdProduct" class="row">
      <p>The last created product:</p>
      <Product :product="createdProduct" />
    </div>
  </div>
</template>

<script>
  // use pinia store
  import { productsStore } from '@/store';
  import { mapStores } from 'pinia';

  import Product from '../components/Products/Product.vue';

  export default {
    components: {
      Product,
    },
    data() {
      return {
        createdProduct: {},
      };
    },
    computed: {
      ...mapStores(productsStore),
    },
    mounted() {
      this.createdProduct = this.productsStore.createdProduct;
    },
  };
</script>

<style></style>
