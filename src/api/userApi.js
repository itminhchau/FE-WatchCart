import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/api/v1/create/customer';
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = '/api/v1/login/customer';
    return axiosClient.post(url, data);
  },
};

export default userApi;
