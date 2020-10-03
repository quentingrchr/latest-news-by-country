import Head from "next/head";
import React from "react";
import { useRouter } from "next/router";

import News from "../src/components/news/News";
import Meta from "../src/components/meta/Meta";
import Wrapper from "../src/components/wrapper/Wrapper";

export default function Articles() {
  const router = useRouter();

  const { country } = router.query;

  return (
    <div>
      <Head>
        <Meta />
      </Head>
      <Wrapper>{country && <News country={country.toUpperCase()} />}</Wrapper>
    </div>
  );
}
