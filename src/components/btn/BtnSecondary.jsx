import React from "react";

import { Link } from "./Btn.style";
import { animateClipath } from "../../utility";

export default function BtnSecondary({ href, text, _blank }) {
  return (
    <Link href={href} target={`${_blank ? "_blank" : "_self"}`}>
      <p>{text}</p>
    </Link>
  );
}
