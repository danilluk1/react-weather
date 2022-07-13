import React from "react";
import GlobalSvgSelector from "../../assets/icons/global/GlobalSvgSelector";
import styles from "./Header.module.scss";
import Select from "react-select";
import { useAppDispatch } from "../../redux/store";
import { setCity } from "../../redux/slices/weatherSlice";

const options = [
  { value: "Shadrinsk,ru", label: "Шадринск" },
  { value: "Moscow,ru", label: "Москва" },
  { value: "London,uk", label: "Лондон" },
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
  const dispatch = useAppDispatch();
  
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
          defaultValue={options[0]}
          onChange={(e) => dispatch(setCity(e?.value ?? ''))}
        />
      </div>
    </div>
  );
};

export default Header;
