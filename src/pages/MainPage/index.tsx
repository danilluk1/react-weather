import React from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import Header from "../../components/Header";
import CurrentWeatherAdvanced from "./components/CurrentWeatherAdvanced";
import CurrentWeatherShort from "./components/CurrentWeatherShort";
import WeekForecast from "./components/WeekForecast";
import styles from "./MainPage.module.scss";

const MainPage = () => {
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
