import styled from "styled-components";
import { motion } from "framer-motion";

import theme from "../../theme/index";

const { colors, fontSizes, fontWeight } = theme;

export const ArticleContainer = styled.article`
  display: flex;
  flex-direction: ${(p) => (p.contentIsRight ? `row-reverse` : "row")};
  height: 24rem;
  margin: 6rem 0;
  justify-content: space-evenly;
  align-items: center;
  padding: 2rem 4rem;
  position: relative;
  @media (max-width: 580px) {
    justify-content: center;
    aside {
      display: none;
    }
  }
  aside {
    width: 100%;
    height: 90%;
    overflow: hidden;
    border-radius: 5px;

    img {
      height: 100%;
      width: 100%;
      filter: grayscale(100%);
      transition: filter 0.3s ease, transform 2s ease;
    }
  }
  &:after {
    background-color: ${colors.secondary};
    content: "";
    display: inline-block;

    height: 2px;
    width: 80%;
    position: absolute;
    bottom: -3rem;
  }

  &:hover {
    aside {
      img {
        transition: filter 3s ease, transform 25s ease;
        transform: scale(1.4);
        filter: grayscale(0%);
      }
    }
  }
`;

export const ArticleContent = styled(motion.div)`
  height: 100%;
  width: 100%;
  margin-right: ${(p) => (p.contentIsRight ? `0` : "2rem")};
  margin-left: ${(p) => (p.contentIsRight ? `2rem` : "0")};
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  @media (max-width: 580px) {
    margin-right: 0px;
    margin-left: 0px;
  }
  div {
    h3 {
      font-size: 2.2rem;
      font-weight: 600;
      transform: translateY(20px);
      overflow: hidden;
    }

    p {
      margin-bottom: 0.5rem;
      overflow: hidden;
      font-size: ${fontSizes.subHeading};
      font-weight: ${fontWeight.subHeading};
    }
  }
`;

export const ImgNotFound = styled.div`
  background-color: grey;
  height: 100%;
  width: 100%;
`;
