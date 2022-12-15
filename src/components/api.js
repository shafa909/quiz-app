import axios from 'axios';
const baseURL = 'https://eok9ha49itquif.m.pipedream.net';

export const getQuestions = async () => {
  return axios
    .get(baseURL)
    .then((response) => {
      return response.data.questions;
    })
    .catch(() => {
      console.log('not able to ftech api');
    });
};
