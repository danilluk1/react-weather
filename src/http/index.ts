import axios, {AxiosRequestConfig} from "axios";


export const API_URL = "https://api.openweathermap.org/data/2.5/weather";

const $api = axios.create({
  baseURL: API_URL,
  params: {
    appid: 'fd41e1cb7cff379c4b62f02e739a573f',
  }
})

export default $api;