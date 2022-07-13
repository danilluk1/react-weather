import $api from "../http";
import { Forecast } from "../models/Forecast";

export default class WeatherService {


  static async getCurrentWeather(city: string) {
    return await $api.get<Forecast>(`?q=${city}&lang=ru&units=metric`);
  }
}
