import $api from "../http";
import { Forecast } from "../models/Forecast";

export default class WeatherService {


  static fetchCurrentWeather(city: string) : Promise<any> {
    return $api.get<Forecast>(`?=${city}`);
  }
}
