import {createSlice, createAsyncThunk} from "@reduxjs/toolkit";
import type {PayloadAction} from "@reduxjs/toolkit";
import { Forecast } from "../../models/Forecast";
import WeatherService from "../../services/weatherService";



type WeatherSliceState = {
  currentWeather: Forecast | null;
  fiveDaysForecast: Forecast[];
  city: string;
  status: 'error' | 'loading' | 'success';
}

const initialState: WeatherSliceState = {
  currentWeather: null,
  fiveDaysForecast: [],
  city: 'Shadrinsk,ru',
  status: 'loading',
};

export const fetchCurrentWeather = createAsyncThunk<Forecast, string> ('weather/fetchCurrentWeather', async (city) => {
  const jsonResponse = await WeatherService.getCurrentWeather(city);
  return jsonResponse.data;
});

export const weatherSlice = createSlice({
  name: "weather",
  initialState,
  reducers: {
    setCity(state, action: PayloadAction<string>){
      state.city = action.payload;
    }
  },

  extraReducers: (builder) => {
    builder.addCase(fetchCurrentWeather.fulfilled, (state, action: PayloadAction<Forecast>) =>{
      state.currentWeather = action.payload;
      const date = new Date(action.payload.dt);
      let temp = state.currentWeather;
      temp.dt_txt = `${date.getHours()}:${date.getMinutes()}`;
      state.currentWeather = temp;
      state.status = 'success';
    });
    builder.addCase(fetchCurrentWeather.pending, (state) =>{
      state.currentWeather = null;
      state.status = 'loading';
    });
    builder.addCase(fetchCurrentWeather.rejected, (state) =>{
      state.currentWeather = null;
      state.status = 'error';
    });
  }
});
export const {setCity} = weatherSlice.actions;
export default weatherSlice.reducer;

