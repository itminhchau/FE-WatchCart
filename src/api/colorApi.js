import axiosClient from './axiosClient';

const colorApi = {
  getAll() {
    const url = '/api/v1/get/colors';
    return axiosClient.get(url);
  },
};

export default colorApi;
