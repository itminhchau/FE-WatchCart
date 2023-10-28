import axiosClient from './axiosClient';

const orderApi = {
  createOrder(data) {
    const url = '/api/v1/create/order';
    return axiosClient.post(url, data);
  },
};

export default orderApi;
