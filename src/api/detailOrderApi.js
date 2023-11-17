import axiosClient from './axiosClient';

const detailOrderApi = {
  createDetailOrder(data) {
    const url = '/api/v1/create/order/detail';
    return axiosClient.post(url, data);
  },
  getDetailOrderApi(data) {
    const url = '/api/v1/get/detail/order';
    return axiosClient.get(url, {
      params: data,
    });
  },
};

export default detailOrderApi;
