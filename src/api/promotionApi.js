import axiosClient from './axiosClient';

const promotionApi = {
  getAll() {
    const url = '/api/v1/product/promotion-biggest';
    return axiosClient.get(url);
  },
};

export default promotionApi;
