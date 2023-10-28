import axiosClient from './axiosClient';

const detailOrderApi = {
  createDetailOrder(data) {
    const url = '/api/v1/create/order/detail';
    return axiosClient.post(url, data);
  },
};

export default detailOrderApi;
