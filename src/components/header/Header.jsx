import React from "react";
import { NavLink, Link /* as RouterNavLink  */ } from "react-router-dom";

//import { AppBar, Container, Typography, Toolbar } from "@mui/material";
//icons
import SearchIcon from "@mui/icons-material/Search";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

import MainContainer from "../container/Container";
import {
  HeaderContainer,
  NavOptionList,
  NavOption,
  Nav,
  SideBlock,
  Logo,
} from "./Header.style";

import logo from "../../assets/img/logo.svg";

const Header = () => {
  return (
    <HeaderContainer>
      <MainContainer>
        <Nav>
          <Logo to="/">
            <img
              src={logo}
              alt=""
              style={{ minWidth: "164px", height: "32px" }}
            />
          </Logo>
          <NavOptionList>
            <NavOption to="/services">Services</NavOption>
            <NavOption to="/company">Company</NavOption>
            <NavOption to="/career">Career</NavOption>
            <NavOption to="/magazine">Magazine</NavOption>
            <NavOption to="/contacts">Contacts</NavOption>
            <NavOption to="/more">More+</NavOption>
          </NavOptionList>

          <SideBlock>
            <SearchIcon
              sx={{
                color: "#031F49",
                fontSize: "25px",
                position: "absolute",
                right: "67px",
                transition: "0.1s",
                "&:hover": { color: "#f0192a" },
              }}
            />
            <button
              style={{
                marginLeft: "30px",
                marginRight: "17px",
                backgroundColor: "inherit",
                position: "relative",
                fontSize: "18px",
                cursor: "pointer",
              }}
            >
              EN
              <ArrowDropDownIcon
                style={{
                  position: "absolute",
                }}
              />
            </button>
          </SideBlock>
        </Nav>
      </MainContainer>
    </HeaderContainer>
  );
};

export default Header;

{
  /*       <Container >
           <AppBar
          position="static"
          sx={{
            backgroundColor: "inherit",
          }}
        >
          <Toolbar variant="nav">
            <Link component={RouterNavLink} to="/">
              <img
                src={logo}
                alt=""
                style={{ width: "164px", height: "32px" }}
              />
            </Link>
              </Toolbar>
              </AppBar> 
      </Container> */
}
