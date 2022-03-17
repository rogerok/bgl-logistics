import React from "react";
import { OuterContainer } from "./Container.styles";

const MainContainer = ({ children }) => {
  return <OuterContainer>{children}</OuterContainer>;
};

export default MainContainer;
