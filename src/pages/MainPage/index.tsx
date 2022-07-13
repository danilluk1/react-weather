import React from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import Header from "../../components/Header";
import { fetchCurrentWeather } from "../../redux/slices/weatherSlice";
import { useAppDispatch, useAppSelector } from "../../redux/store";
import CurrentWeatherAdvanced from "./components/CurrentWeatherAdvanced";
import CurrentWeatherShort from "./components/CurrentWeatherShort";
import WeekForecast from "./components/WeekForecast";
import styles from "./MainPage.module.scss";

const MainPage = () => {
  const dispatch = useAppDispatch();
  const city = useAppSelector((state) => state.weather.city);
  const status = useAppSelector((state) => state.weather.status);
  React.useEffect(() => {
    dispatch(fetchCurrentWeather(city));
  }, [city]);

  if (status === "error") return <div>404</div>;

  return (
    <div className={styles.root}>
      <div className={styles.currentWeatherContainer}>
        <CurrentWeatherShort />
        <CurrentWeatherAdvanced />
      </div>
      <WeekForecast />
    </div>
  );
};

export default MainPage;
