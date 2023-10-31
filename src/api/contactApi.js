import axiosClient from './axiosClient';

const contactApi = {
  createContact(data) {
    const url = '/api/v1/create/contact';
    return axiosClient.post(url, data);
  },
};

export default contactApi;
