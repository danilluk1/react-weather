import { current } from "@reduxjs/toolkit";
import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import { useAppSelector } from "../../../../redux/store";
import styles from "./CurrentWeatherShort.module.scss";

const CurrentWeatherShort = () => {
  const currentWeather = useAppSelector(
    (state) => state.weather.currentWeather
  );

  return (
    <div className={styles.root}>
      {currentWeather && (
        <>
          <div className={styles.aboutWeather}>
            <div className={styles.tempCurrent}>
              <span>
                {currentWeather.main.temp_max.toFixed(0)}
                <span>&#176;</span>
              </span>
              <span>Сегодня</span>
            </div>
            <div className={styles.weatherSvgContainer}>
              <GlobalSvgSelector id={currentWeather.weather[0].main} />
            </div>
          </div>
          <div className={styles.aboutLocation}>
            <span>Время: {currentWeather.dt_txt}</span>
            <span>Город: {currentWeather.name}</span>
          </div>
        </>
      )}
    </div>
  );
};

export default CurrentWeatherShort;
