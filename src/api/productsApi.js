import axiosClient from './axiosClient';

const productsApi = {
  getAll() {
    const url = '';
    return axiosClient.get(url);
  },
  getProduct(id) {
    const url = `/xxxx/${id}`;
    return axiosClient.get(url);
  },
  createProduct(data) {
    const url = '/api/v1/create/product';
    return axiosClient.post(url, data);
  },
  updateProduct(data) {
    const url = `/xxx/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteProduct(id) {
    const url = `/xxx/${id}`;
    return axiosClient.delete(url);
  },
};

export default productsApi;
