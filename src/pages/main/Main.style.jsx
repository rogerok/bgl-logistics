import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";

import backgroundImage from "../../assets/img/main-bg.jpg";

export const Inner = styled.section`
  background-color: #0d4dad;
  padding: 148px 0 115px 0;
  color: #ffffff;
`;

export const Underlay = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Background = styled.div`
  min-width: 50%;
  background-image: url(${backgroundImage});
`;

export const MainPageHeader = styled.h1`
  font-weight: 700;
  font-size: 110px;
  line-height: 110px;
  color: #ffffff;
  white-space: nowrap;
  margin-bottom: 50px;
`;

export const HeadersWrapper = styled.div`
  margin-top: 148px;
  margin-bottom: 80px;
`;

export const SubHeader = styled.h3`
  color: #ffffff;
  font-size: 1.5rem;
  line-height: 31.2px;
  font-weight: 600;
`;

export const Links = styled.p`
  width: 89%;
  display: flex;
  justify-content: space-between;
  font-size: 20px;
  text-transform: uppercase;
  color: #ffffff;
  line-height: 0;
`;

const customLinkStyles = css`
  border: 1px solid #ffffff;
  padding: 22px 11px 25px 0;
  width: 100%;
  text-align: center;
  vertical-align: center;
`;

export const SendLink = styled(Link)`
  ${customLinkStyles}
  border-radius: 0 35px 35px 0;
`;
export const TrackLink = styled(Link)`
  ${customLinkStyles}
  border-radius: 35px 0 0 35px;
  border-right: 0;
`;

export const Overlay = styled.div`
  min-width: 50%;
  background-color: #0d4dad;
  padding-left: 192px;
  position: relative;
  display: flex;
  flex-direction: column;
`;
