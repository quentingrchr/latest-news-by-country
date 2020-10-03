import styled from "styled-components";
import theme from "../../theme/index";
import { motion } from "framer-motion";

const { colors, transition } = theme;
/*
 clip-path: ${(p) =>
    p.isShown
      ? "polygon(100% 0, 0 0, 0 100%, 100% 100%)"
      : "polygon(0 0, 0 0, 0 100%, 0 100%)"};
*/

export const Link = styled(motion.a)`
  cursor: pointer;
  text-decoration: none;
  color: ${colors.primary};
  position: relative;
  display: flex;
  justify-content: flex-end;
  width: 15rem;
  padding-bottom: 10px;
  padding-top: 10px;
  overflow: hidden;

  p {
    width: fit-content;
    font-family: "Lora", serif;
    font-size: 1.5rem;
    font-weight: 700;
    text-transform: uppercase;
    z-index: 2;
    padding-right: 10px;
  }

  &:after {
    position: absolute;
    bottom: 0px;
    content: "";
    display: inline-block;
    height: 5px;
    width: 100%;
    background-color: ${colors.primary};
    z-index: 1;
    transition: all ${transition.delayOut} ease;
  }
`;

export const LinkClipped = styled(Link)`
  clip-path: polygon(0 0, 0 0, 0 100%, 0 100%);
  &:hover {
    color: ${colors.secondary};
    &:after {
      height: 100%;
      bottom: 0;
    }
  }
`;
