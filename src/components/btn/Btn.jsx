import React from "react";
import { LinkClipped } from "./Btn.style";
import { animateClipath } from "../../utility";

const Btn = ({ href, text, animationDelay }) => {
  return (
    <LinkClipped
      animate={animateClipath(0.3, 0.2)}
      transition={{ duration: 2, delay: animationDelay }}
      href={href}
      target="_blank"
    >
      <p>{text}</p>
    </LinkClipped>
  );
};
export default Btn;
