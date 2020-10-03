import styled from "styled-components";

import theme from "../../theme/index";

const { colors, fonts, fontSizes, fontWeight } = theme;

export const Ul = styled.ul`
  width: 100%;

  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  align-items: center;
`;

export const H2 = styled.h2`
  color: ${colors.primary};
  font-size: ${fontSizes.h2};
  font-weight: ${fontWeight.h2};
  font-family: ${fonts[0]};
  margin: 3rem 0;
`;

export const Header = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  margin: 4rem;
`;

export const InputBar = styled.div`
  margin: 0 auto;
  border-radius: 30px;

  border: 1px solid #dcdcdc;
  transition: all 0.1s ease;

  &:hover {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
  }
  :focus-within {
    box-shadow: 1px 1px 8px 1px #dcdcdc;
    outline: none;
  }

  input[type="text"] {
    border-radius: 30px;

    padding: 0.5rem 2rem;
    height: 45px;
    border: none;
    width: 400px;
    font-size: 16px;
    outline: none;
  }
`;

export const NotFound = styled.div`
  color: ${colors.primary};
  font-size: ${fontSizes.h2};
  font-weight: ${fontWeight.h2};
  font-family: ${fonts[0]};
  padding: 2rem 2rem;
  opacity: 0.8;
`;
