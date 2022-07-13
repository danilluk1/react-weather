import axios, {AxiosRequestConfig} from "axios";

export const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const $api = axios.create({
  baseURL: API_URL,
  params: {
    appid: process.env.REACT_APP_API_URL,
  }
})

export default $api;