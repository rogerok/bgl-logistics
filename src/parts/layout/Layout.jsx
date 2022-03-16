import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Footer from "../../components/footer/Footer";
import { LayoutContainer } from "./Layout.style";

const Layout = () => {
  return (
    <LayoutContainer>
      <Header />
      <Outlet />
      <Footer />
    </LayoutContainer>
  );
};

export default Layout;
