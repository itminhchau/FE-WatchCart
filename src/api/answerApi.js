import axiosClient from './axiosClient';

const answerApi = {
  createAnswer(data) {
    const url = '/api/v1/create/answer';
    return axiosClient.post(url, data);
  },
};

export default answerApi;
