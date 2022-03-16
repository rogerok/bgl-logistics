import styled from "@emotion/styled";

export const LayoutContainer = styled.main`
  height: 100vh;
  display: grid;
  max-width: 1600px;
  grid-template-rows: 0.5fr 2fr 0.5fr 0.3fr;
  grid-template-areas:
    "header header header header"
    "main main main  main"
    "main main main main"
    "footer footer footer footer";
  grid-gap: 0.3rem;
`;
