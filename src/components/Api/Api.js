import axios from "axios"

const baseURL = 'https://free.currconv.com/api/v7/';

export const getData = path => {
  return axios.get(`${baseURL}${path}apiKey=${process.env.REACT_APP_API_KEY}`);
}