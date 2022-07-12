import React from "react";
import Header from "./Header";
import { Outlet } from "react-router-dom";
import styles from "./MainLayout.module.scss"

const MainLayout = () => {
  return (
    <div className={styles.root}>
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
