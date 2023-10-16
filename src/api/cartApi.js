import axiosClient from './axiosClient';

const cartApi = {
  createCart(data, accessToken) {
    const url = '/api/v1/create/cart';
    return axiosClient.post(url, data, {
      headers: {
        Authorization: `Bearer ${accessToken}`, // Gửi mã thông báo truy cập trong header
      },
    });
  },
  getAllCart(data) {
    const url = '/api/v1/getall/cart';
    return axiosClient.get(url, {
      params: data,
    });
  },
};

export default cartApi;
