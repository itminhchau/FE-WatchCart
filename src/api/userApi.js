import axiosClient from './axiosClient';

const userApi = {
  register(data) {
    const url = '/auth/local/register';
    return axiosClient.post(url, data);
  },
  login(data) {
    const url = '/api/v1/login/customer';
    return axiosClient.post(url, data);
  },
};

export default userApi;
