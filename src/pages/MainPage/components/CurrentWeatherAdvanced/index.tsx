import { current } from "@reduxjs/toolkit";
import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { useAppSelector } from "../../../../redux/store";
import styles from "./CurrentWeatherAdvanced.module.scss";

const CurrentWeatherAdvanced = () => {
  const currentWeather = useAppSelector(
    (state) => state.weather.currentWeather
  );

  if (!currentWeather) {
    return <div className={styles.root}></div>;
  }

  return (
    <div className={styles.root}>
      <div className={styles.forecastItem}>
        <div className={styles.svgContainer}>
          <GlobalSvgSelector id={"temperature"} />
          <span>Температура</span>
        </div>
        <span>
          {currentWeather.main.temp}&#176; ощущается как{" "}
          {currentWeather.main.feels_like}&#176;
        </span>
      </div>
      <div className={styles.forecastItem}>
        <div className={styles.svgContainer}>
          <GlobalSvgSelector id={"pressure"} />
          <span>Давление</span>
        </div>
        <span>{(currentWeather.main.pressure * 0.750064).toFixed(1)}</span>
      </div>
      <div className={styles.forecastItem}>
        <div className={styles.svgContainer}>
          <GlobalSvgSelector id={"rain"} />
          <span>Осадки</span>
        </div>
        <span>{currentWeather.main.humidity}%</span>
      </div>
      <div className={styles.forecastItem}>
        <div className={styles.svgContainer}>
          <GlobalSvgSelector id={"wind"} />
          <span>Ветер</span>
        </div>
        <span>{(currentWeather.wind.speed * 3.6).toFixed(1)} м/с</span>
      </div>
    </div>
  );
};

export default CurrentWeatherAdvanced;
