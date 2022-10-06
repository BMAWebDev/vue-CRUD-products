<template>
  <div class="container">
    <div class="row">
      <h1 class="col-lg-6">
        Products page (<span>{{ products.length }} results</span>)
      </h1>
      <router-link class="col-lg-6" to="/add-product" style="font-size: 24px"
        >Add a new product</router-link
      >
    </div>

    <div class="row products">
      <Product
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
  </div>
</template>

<script>
  import { Products } from '@/functions';
  import Product from '../components/Products/Product.vue';

  export default {
    components: { Product },

    data() {
      return {
        products: [],
      };
    },

    async mounted() {
      const productsRes = await Products.readMany();
      this.products = productsRes.products;
    },
  };
</script>

<style></style>
