import axiosClient from './axiosClient';

const questionApi = {
  getQuestion(params) {
    const url = `/api/v1/get-question`;
    return axiosClient.get(url, {
      params: params,
    });
  },
  createQuestion(data) {
    const url = '/api/v1/create/question';
    return axiosClient.post(url, data);
  },
};

export default questionApi;
