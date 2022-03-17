import styled, { css } from "@emotion/styled";
import { NavLink, Link } from "react-router-dom";

export const HeaderContainer = styled.header`
  grid-area: header;
  margin: 0 auto;
`;

export const NavOptionList = styled.ul`
  display: inline-flex;
`;
export const NavOption = styled(NavLink)`
  padding-right: 41px;
  padding-top: 9px;
  text-align: center;
  transition: color 0.1s;
  &:last-child {
    padding-right: 0px;
  }
  &:hover {
    color: #f0192a;
  }
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 27px 0 20px 0;
`;

export const SideBlock = styled.div`
  display: inline-flex;
  align-items: center;
  position: relative;
  margin-left: auto;
`;

export const Logo = styled(Link)`
  margin-right: 107px;
`;

export const SearchButton = styled.button`
  margin-left: 30px;
  margin-right: 17px;
  background-color: inherit;
  position: relative;
  font-size: 18px;
  cursor: pointer;
  & span {
    :hover {
      color: #f0192a;
    }
  }
`;
