import { axios } from '@/lib';

const readMany = async () => {
  return await axios.get('products');
};

const readOne = async (id) => {
  return await axios.get(`products/${id}`);
};

const create = async (data) => {
  return await axios.post('products/add', data);
};

const update = async (id, data) => {
  return await axios.put(`products/${id}`, data);
};

const remove = async (id) => {
  return await axios.delete(`products/${id}`);
};

export default { readMany, readOne, create, update, remove };
