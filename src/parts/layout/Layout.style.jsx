import styled from "@emotion/styled";

export const LayoutContainer = styled.main`
  width: 1600px;
  max-width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-areas:
    "header header header header"
    "main main main  main"
    "main main main main"
    "footer footer footer footer";
`;
