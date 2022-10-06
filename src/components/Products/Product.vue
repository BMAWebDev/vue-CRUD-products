<template>
  <div class="col-lg-4 product">
    <div class="master-container">
      <div class="content">
        <img
          v-if="product.thumbnail"
          class="thumbnail"
          :src="product.thumbnail"
          alt=""
        />
        <h2 class="title">{{ product.title }}</h2>
        <p class="description">{{ product.description }}</p>
        <p class="stock">
          Stock:
          <span v-if="product.stock > 30">In stock</span>
          <span v-else-if="product.stock > 5">Only a few left</span>
          <span v-else-if="product.stock == 1"
            >Product exposed in the shop</span
          >
          <span v-else>Out of stock</span>
        </p>
        <p class="price">
          Price: <span>${{ product.price }}</span>
        </p>
      </div>

      <router-link :to="'/products/' + product.id">
        <button type="button" class="edit-button">Edit product</button>
      </router-link>
    </div>
  </div>
</template>

<script>
  export default {
    props: ['product'],
  };
</script>

<style scoped lang="scss">
  .product {
    padding: 15px;
    .master-container {
      border: 1px solid #e3e3e3;
      padding: 30px;
      border-radius: 10px;
      box-shadow: 1px 0px 4px #e3e3e3;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      .content {
        .thumbnail {
          object-fit: contain;
          width: 100%;
          margin-bottom: 20px;
          max-height: 300px;
        }
      }

      a {
        &:hover {
          background-color: inherit;
        }

        .edit-button {
          padding: 10px 20px;
          border-radius: 4px;
          background-color: #f60b44;
          border: 1px solid #f60b44;
          color: #fff;
        }
      }
    }
  }
</style>
