import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import styles from "./WeekForecast.module.scss";

const WeekForecast = () => {
  return (
    <div className={styles.root}>
      <div className={styles.dayForecast}>
        <h3>Сегодня</h3>
        <span>28 авг</span>
        <GlobalSvgSelector id={"littleRain"} />
        <span>+18</span>
        <span>+15</span>
        <span>Облачно</span>
      </div>
      <div className={styles.dayForecast}>
        <h3>Сегодня</h3>
        <span>28 авг</span>
        <GlobalSvgSelector id={"littleRain"} />
        <span>+18</span>
        <span>+15</span>
        <span>Облачно</span>
      </div>
      <div className={styles.dayForecast}>
        <h3>Сегодня</h3>
        <span>28 авг</span>
        <GlobalSvgSelector id={"littleRain"} />
        <span>+18</span>
        <span>+15</span>
        <span>Облачно</span>
      </div>
      <div className={styles.dayForecast}>
        <h3>Сегодня</h3>
        <span>28 авг</span>
        <GlobalSvgSelector id={"littleRain"} />
        <span>+18</span>
        <span>+15</span>
        <span>Облачно</span>
      </div>
      <div className={styles.dayForecast}>
        <h3>Сегодня</h3>
        <span>28 авг</span>
        <GlobalSvgSelector id={"littleRain"} />
        <span>+18</span>
        <span>+15</span>
        <span>Облачно</span>
      </div>
    </div>
  );
};

export default WeekForecast;
