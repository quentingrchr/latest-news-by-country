import styled from "styled-components";
import theme from "../../theme/index";

const { colors, transition, fontSizes, fontWeight } = theme;

export const LatestNewsContainer = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 0px;
  grid-row-gap: 0px;
  height: 100vh;
`;

export const LatestNewsPrimary = styled.div`
  grid-area: 1 / 1 / 3 / 2;
`;
export const LatestNewsSecondary = styled.div`
  grid-area: 1 / 2 / 2 / 3;
  position: relative;
  &:before {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: ${colors.secondary};
    width: 100%;
    height: 2px;
    bottom: 0;
  }
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: ${colors.secondary};
    width: 2px;
    height: 100%;
    bottom: 0;
  }
`;

export const LatestNewsTertiary = styled.div`
  grid-area: 2 / 2 / 3 / 3;
  position: relative;
  &:after {
    content: "";
    display: inline-block;
    position: absolute;
    background-color: ${colors.secondary};
    width: 2px;
    height: 100%;
    top: 0;
  }
`;
