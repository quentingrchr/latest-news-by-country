import styled from "styled-components";
import { motion } from "framer-motion";

import theme from "../../theme/index";

const { colors, transition, fontSizes, fontWeight } = theme;

export const ArticleContainer = styled(motion.article)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 80%;
  height: 100%;
  margin: auto;
  position: relative;
  color: black;
  opacity: 0;
`;

export const ArticleText = styled(motion.div)`
  transform: translateY(0px);
  margin-top: auto;
  position: relative;
  opacity: 1;
  h2 {
    font-size: ${fontSizes.h2};
    font-weight: ${fontWeight.h2};
    transform: translateY(20px);
    overflow: hidden;
  }

  p {
    transform: translateY(20px);
    margin-bottom: 1.2rem;
    overflow: hidden;
    font-size: ${fontSizes.subHeading};
    font-weight: ${fontWeight.subHeading};
  }
`;
export const ArticleCta = styled(motion.div)`
  position: relative;
  margin-top: auto;
  margin-bottom: 10%;
  width: 100%;
  display: flex;
  justify-content: flex-end;
`;
// clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
