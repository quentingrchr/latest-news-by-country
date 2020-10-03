import styled, { keyframes } from "styled-components";

import theme from "../../theme/index";

import { motion } from "framer-motion";

const { colors, fontSizes, fontWeight, fonts } = theme;

const flagAnimation = keyframes`
 from { 
   transform: translateY(0px);  
   box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
  }
 to { 
   transform: translateY(-2px); 
   box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
  }
`;

export const Li = styled(motion.li)`
  margin: 2rem;
  opacity: 0;
  cursor: pointer;
`;

export const Card = styled.div`
  overflow: hidden;
  width: 400px;
  display: flex;
  flex-direction: column;
  height: 32rem;
  align-items: center;
  justify-content: center;
  border-radius: 2px;
  padding: 2rem 4rem;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
  transition: box-shadow 0.3s cubic-bezier(0.25, 0.8, 0.25, 1),
    transform 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);

  h2 {
    text-align: center;
    font-size: ${fontSizes.h2};
    font-family: ${fonts[0]};
    font-weight: ${fontWeight.h2};
    margin-bottom: 2rem;
  }

  img {
    width: 100%;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
    filter: grayscale(100%);
    transition: filter 0.4s ease;
    margin-bottom: 2rem;
  }

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 14px 28px rgba(0, 0, 0, 0.25), 0 10px 10px rgba(0, 0, 0, 0.22);
    img {
      filter: grayscale(0%);
      box-shadow: 0 3px 6px rgba(0, 0, 0, 0.12), 0 3px 5px rgba(0, 0, 0, 0.24);
      animation-name: ${flagAnimation};
      animation-duration: 1.8s;
      animation-timing-function: linear;
      animation-iteration-count: infinite;
      animation-direction: alternate;
    }
  }
`;
