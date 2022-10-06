<template>
  <div>
    <h1>Edit {{ product.title }}:</h1>
    <Form
      :handle-form="handleForm"
      @handleDelete="handleDelete"
      :product="product"
    />
  </div>
</template>

<script>
  import { Products } from '../functions';
  import Form from '../components/Products/Form.vue';

  export default {
    components: {
      Form,
    },
    data() {
      return {
        product: {},
      };
    },
    methods: {
      async handleForm(data) {
        await this.editProduct(data);
      },

      async handleDelete() {
        const deletedProduct = await Products.remove(this.product.id);

        console.log(deletedProduct);
        alert(
          'product deleted. look in console to see the changes (added isDeleted and deletedOn properties)'
        );
      },

      async editProduct(data) {
        const updatedProduct = await Products.update(this.product.id, data);

        console.log(updatedProduct);
        alert('product updated. look in console to see the changes');
      },
    },

    async mounted() {
      const { id } = this.$route.params;

      this.product = await Products.readOne(id);
    },
  };
</script>

<style scoped>
  h1 {
    text-align: center;
  }
</style>
