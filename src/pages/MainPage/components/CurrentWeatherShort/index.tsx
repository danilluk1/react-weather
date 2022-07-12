import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import styles from "./CurrentWeatherShort.module.scss";

const CurrentWeatherShort = () => {
  return (
    <div className={styles.root}>
      <div className={styles.aboutWeather}>
        <div className={styles.tempCurrent}>
          <span>
            20<span>&#176;</span>
          </span>
          <span>Сегодня</span>
        </div>
        <div className={styles.weatherSvgContainer}>
          <GlobalSvgSelector id={"sunny"} />
        </div>
      </div>
      <div className={styles.aboutLocation}>
        <span>Время: 21:54</span>
        <span>Город: Санкт-Петербург</span>
      </div>
    </div>
  );
};

export default CurrentWeatherShort;
