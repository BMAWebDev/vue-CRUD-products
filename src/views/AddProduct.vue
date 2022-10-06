<template>
  <div>
    <h1>Add a new product:</h1>

    <Form :handleForm="handleForm" />
  </div>
</template>

<script>
  import { Products } from '../functions';
  import Form from '../components/Products/Form.vue';

  // use pinia store
  import { productsStore } from '@/store';
  import { mapStores } from 'pinia';

  export default {
    components: { Form },

    data() {
      return {
        data: {},
      };
    },

    computed: {
      ...mapStores(productsStore),
    },

    methods: {
      async handleForm(data) {
        await this.addProduct(data);
      },

      async addProduct(data) {
        // get the values
        // call Products.create(values)
        const productCreated = await Products.create(data); // the thumbnail will eventually be saved on a server, cant do that with this mock api right now

        // save the response (created product) in pinia store
        this.productsStore.setCreatedProduct(productCreated);

        // redirect on home to show the saved created product
        this.$router.push('/');
      },
    },
  };
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
