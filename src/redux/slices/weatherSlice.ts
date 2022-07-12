import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import { Forecast } from "../../models/Forecast";
import WeatherService from "../../services/weatherService";


const fetchCurrentWeather = async (city: string) => {
  const data = await WeatherService.fetchCurrentWeather(city);
  console.log(data);
}


type WeatherSliceState = {
  currentWeather: Forecast;
  fiveDaysForecast: Forecast[];
}

const initialState: WeatherSliceState = {
  currentWeather: 
  new Forecast(),
  fiveDaysForecast: [],
}

export const booksSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {

  },

  extraReducers: (builder) => {
    
  }
});

export default booksSlice.reducer;

