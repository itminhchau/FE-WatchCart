import axiosClient from './axiosClient';

const reviewApi = {
  getReviewProduct(params) {
    const url = `/api/v1/get-review-product/review`;
    return axiosClient.get(url, {
      params: params,
    });
  },
  getAvgStar(params) {
    const url = `/api/v1/get-avg-star/review`;
    return axiosClient.get(url, {
      params: params,
    });
  },

  createReviewProduct(data) {
    const url = '/api/v1/create/review';
    return axiosClient.post(url, data);
  },
  searchProduct(params) {
    const url = `/api/v1/search/product`;
    return axiosClient.get(url, {
      params: params,
    });
  },
  updateProduct(data) {
    const url = `/xxx/${data.id}`;
    return axiosClient.put(url, data);
  },
  deleteProduct(id) {
    const url = `/xxx/${id}`;
    return axiosClient.delete(url);
  },
};

export default reviewApi;
