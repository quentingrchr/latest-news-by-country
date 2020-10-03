import styled from "styled-components";

import theme from "../../theme/index";

const { colors, transition, fontSizes, fontWeight } = theme;

export const Main = styled.main`
  h1 {
    font-size: ${fontSizes.h1};
    font-weight: ${fontWeight.h1};
  }
`;

export const NotFound = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  h2 {
    margin: 2rem 0;
    font-size: ${fontSizes.h2};
    font-weight: ${fontWeight.h2};
  }
`;
