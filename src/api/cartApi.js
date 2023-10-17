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
  getAllCart(data, accessToken) {
    const url = '/api/v1/getall/cart';
    return axiosClient.get(url, {
      params: data,
      headers: {
        Authorization: `Bearer ${accessToken}`, // Gửi mã thông báo truy cập trong header
      },
    });
  },
  deleteItemCart(id) {
    const url = `/api/v1/delete/cart/${id}`;
    return axiosClient.delete(url);
  },
  updateQuantityCart(data) {
    const url = '/api/v1/update/quantity/cart';
    return axiosClient.put(url, data);
  },
};

export default cartApi;
