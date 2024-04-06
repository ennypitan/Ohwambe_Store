import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "../Components/Navbar/NavBar";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
    </>
  );
}

export default Layout;
