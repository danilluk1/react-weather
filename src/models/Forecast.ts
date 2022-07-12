export class Main {
  temp: number;
  feels_like: number;
  temp_min: number;
  temp_max: number;
  pressure: number;
  sea_level: number;
  humidity: number;
  temp_kf: number;

  constructor(temp: number = 0, feels_like: number = 0, 
              temp_min: number = 0, temp_max: number = 0, 
              pressure: number = 0, sea_level: number = 0,
              humidity: number = 0, temp_kf: number = 0) {
    this.temp = temp;
    this.feels_like = feels_like;
    this.temp_min = temp_min;
    this.temp_max = temp_max;
    this.pressure = pressure;
    this.sea_level = sea_level;
    this.humidity = humidity;
    this.temp_kf = temp_kf;
  }
}

export class DateTime {
  dt: number;
  dt_txt: string;

  constructor(dt: number = 0, dt_txt: string = "") {
    this.dt = dt;
    this.dt_txt = dt_txt;
    
  }
}

export class Weather {
  id: number;
  main: string;
  description: string;
  icon: string;

  constructor(id: number = 0, main: string = "", 
              description: string = "", icon: string = "") {
    this.id = id;
    this.main = main;
    this.description = description;
    this.icon = icon;
    
  }
}

export class Clouds {
  all: number;

  constructor(all: number = 0) {
    this.all = all;
  }
}

export class Wind {
  speed: number;
  deg: number;
  gust: number;

  constructor(speed: number = 0, deg: number = 0, gust: number = 0) {
    this.speed = speed;
    this.deg = deg;
    this.gust = gust;
    
  }
}

/*
  Предстваляет собой описание типа текущей погоды из
  API OpenWeather
*/
export class Forecast {
  dt: DateTime;
  visibility: number;
  pop: number;
  main: Main;
  weather: Weather;
  clouds: Clouds;
  wind: Wind;

  constructor(dt: DateTime = new DateTime(), main: Main = new Main(), 
              weather: Weather = new Weather(), clouds: Clouds = new Clouds(), 
              wind: Wind = new Wind(), visibility: number = 0, pop: number = 0) {
    this.dt = dt;
    this.weather = weather;
    this.clouds = clouds;
    this.main = main;
    this.wind = wind;

    this.visibility = visibility;
    this.pop = pop;
  }
}