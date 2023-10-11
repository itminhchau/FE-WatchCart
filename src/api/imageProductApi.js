import axiosClient from './axiosClient';

const imageProductApi = {
  getImage(params) {
    const url = '/api/v1/get/image-product-color';
    return axiosClient.get(url, {
      params: params,
    });
  },
};

export default imageProductApi;
