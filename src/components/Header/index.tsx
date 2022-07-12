import React from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import styles from "./Header.module.scss";
import Select from "react-select";

const options = [
  { value: "Shadrinsk", label: "Шадринск" },
  { value: "Moscow", label: "Москва" },
  { value: "London", label: "Лондон" },
];

const colourStyles = {
  control: (styles: any) => ({
    ...styles,
    backgroundColor: "rgba(71, 147, 255, 0.2)",
    width: "20vw",
    height: "37px",
    border: "none",
    borderRadius: "10px",
    zIndex: 100,
  }),
};

const Header: React.FC = () => {
  return (
    <div className={styles.root}>
      <div className={styles.logo}>
        <GlobalSvgSelector id={"header-logo"} />
        <h1>REACT WEATHER</h1>
      </div>
      <div className={styles.right_selector}>
        <GlobalSvgSelector id={"theme-logo"} />
        <Select
          styles={colourStyles}
          options={options}
          placeholder={"Выберите город"}
        />
      </div>
    </div>
  );
};

export default Header;
