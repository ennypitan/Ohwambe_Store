import { Outlet } from "react-router-dom";
import React from "react";
import NavBar from "../Components/Navbar/NavBar";
import Footer from "../Components/Footer/Footer";

function Layout() {
  return (
    <>
      <NavBar />
      <Outlet />
      <Footer />
    </>
  );
}

export default Layout;
