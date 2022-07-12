import React from "react";
import GlobalSvgSelector from "../../../../assets/icons/global/GlobalSvgSelector";
import styles from "./CurrentWeatherAdvanced.module.scss";

const CurrentWeatherAdvanced = () => {
  return (
    <div className={styles.root}>
      <div className={styles.forecastItem}>
        <div className={styles.svgContainer}>
          <GlobalSvgSelector id={"temperature"} />
          <span>Температура</span>
        </div>
        <span>20&#176; ощущается как 17&#176;</span>
      </div>
      <div className={styles.forecastItem}>
        <div className={styles.svgContainer}>
          <GlobalSvgSelector id={"pressure"} />
          <span>Давление</span>
        </div>
        <span>765 мм - нормальное</span>
      </div>
      <div className={styles.forecastItem}>
        <div className={styles.svgContainer}>
          <GlobalSvgSelector id={"rain"} />
          <span>Осадки</span>
        </div>
        <span>Без осадков</span>
      </div>
      <div className={styles.forecastItem}>
        <div className={styles.svgContainer}>
          <GlobalSvgSelector id={"wind"} />
          <span>Ветер</span>
        </div>
        <span>3 м/с южный</span>
      </div>
    </div>
  );
};

export default CurrentWeatherAdvanced;
