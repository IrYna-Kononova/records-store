import React, { useContext } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { DataContext } from "../contexts/Context";

const Layout = () => {
  const { cartsState } = useContext(DataContext);

  /* Get the cartSideBar width using useRef */
  const containerWidth = cartsState.isOpen ? "calc(100vw - 200px)" : "100%";

  return (
    <div className="app" style={{ width: containerWidth }}>
      <Navbar />
      <Outlet />
    </div>
  );
};

export default Layout;
