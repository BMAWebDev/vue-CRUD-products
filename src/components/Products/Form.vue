<template>
  <form @submit="handleFormComponent">
    <div class="form-group d-flex flex-column">
      <label for="title">Title: </label>
      <input type="text" name="title" id="title" v-model="title" />
    </div>

    <div class="form-group d-flex flex-column">
      <label for="description">Description: </label>
      <input
        type="text"
        name="description"
        id="description"
        v-model="description"
      />
    </div>

    <div class="form-group d-flex flex-column">
      <label for="price">Price: </label>
      <input type="number" name="price" id="price" v-model="price" />
    </div>

    <div class="form-group d-flex flex-column">
      <label for="thumbnail">Thumnail: </label>
      <input type="file" name="thumbnail" id="thumbnail" @change="setFile" />
    </div>

    <button type="submit">Submit</button>

    <button
      v-if="productExists"
      type="button"
      @click.prevent="$emit('handleDelete')"
    >
      Delete!
    </button>
  </form>
</template>

<script>
  export default {
    props: ['handleForm', 'product'],

    data() {
      return {
        title: '',
        description: '',
        price: 0,
        thumbnail: {},

        productExists: false,
      };
    },

    methods: {
      setFile(e) {
        this.thumbnail = e.target.files['0'];
      },

      handleFormComponent(e) {
        e.preventDefault();

        const data = {
          title: this.title,
          description: this.description,
          price: this.price,
          thumbnail: this.thumbnail,
        };

        this.handleForm(data);
      },
    },

    // mounted doesnt have time to read the waited product, so we'll get it in the updated hook
    updated() {
      if (this.product) {
        const { title, description, price, thumbnail } = this.product;
        this.productExists = true;

        // verify if the passed object exists and no entries have been updated
        if (
          !this.title &&
          !this.description &&
          !this.price &&
          !Object.keys(this.thumbnail).length
        ) {
          this.title = title;
          this.description = description;
          this.price = price;
          this.thumbnail = thumbnail;
        }
      }
    },
  };
</script>

<style scoped lang="scss">
  form {
    max-width: 500px;
    margin: 0 auto;

    .form-group {
      margin-bottom: 20px;

      label {
        text-align: left;
      }
    }

    button {
      width: 100%;
    }
  }
</style>
