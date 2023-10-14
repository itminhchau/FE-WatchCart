import axiosClient from './axiosClient';

const cartApi = {
  createCart(data, accessToken) {
    const url = '/api/v1/create/cart';
    return axiosClient.post(
      url,
      {
        headers: {
          Authorization: `Bearer ${accessToken}`, // Gửi mã thông báo truy cập trong header
        },
      },
      data
    );
  },
};

export default cartApi;
