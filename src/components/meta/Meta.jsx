import React, { Fragment } from "react";

export default function Meta() {
  return (
    <Fragment>
      <title>Next News</title>
      <meta
        http-equiv="Content-Security-Policy"
        content="upgrade-insecure-requests"
      />

      <link rel="stylesheet" href="reset.css"></link>
      <link
        href="https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&display=swap"
        rel="stylesheet"
      />
    </Fragment>
  );
}
