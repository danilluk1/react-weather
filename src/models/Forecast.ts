export interface Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  humidity: number;
  temp_kf: number;

}

export interface Weather {
  id: number;
  main: string;
  description: string;
  icon: string;
}

export interface Clouds {
  all: number;

}

export interface Wind {
  speed: number;
  deg: number;
  gust: number;

}

/*
  Предстваляет собой описание типа текущей погоды из
  API OpenWeather
*/
export interface Forecast {
  name: string;
  dt: number;
  dt_txt: string;
  visibility: number;
  main: Main;
  weather: Weather[];
  clouds: Clouds;
  wind: Wind;
}