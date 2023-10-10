import axiosClient from './axiosClient';

const brandApi = {
  getAllBrand() {
    const url = '/api/v1/getall/brand';
    return axiosClient.get(url);
  },
};

export default brandApi;
