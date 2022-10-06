import { createRouter, createWebHistory } from 'vue-router';
import Home from '@/views/Home.vue';
import Products from '@/views/Products.vue';
import EditProduct from '@/views/EditProduct.vue';
import AddProduct from '@/views/AddProduct.vue';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/products',
      name: 'products',
      component: Products,
    },
    {
      path: '/add-product',
      name: 'add-product',
      component: AddProduct,
    },
    {
      path: '/products/:id',
      name: 'edit-product',
      component: EditProduct,
    },
  ],
});

export default router;
