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
  getOneCustomer(data) {
    const url = '/api/v1/get-single/customer';

    return axiosClient.get(url, {
      params: data,
    });
  },
  updateCustomer(data) {
    const url = '/api/v1/update/customer';
    return axiosClient.put(url, data);
  },
};

export default userApi;
