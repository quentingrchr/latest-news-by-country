import React, { useState, useEffect } from "react";
import Head from "next/head";
import Link from "next/link";
import axios from "axios";

import Meta from "../src/components/meta/Meta";
import Wrapper from "../src/components/wrapper/Wrapper";
import CountriesList from "../src/components/countries-list/CountriesList";

import { COUNTRIES_API_URL } from "../src/const";

export default function Home() {
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get(`${COUNTRIES_API_URL}/all`)
      .then((res) => {
        setCountries(res.data.filter((c) => c.population / 1000000 > 50));
      })
      .catch((e) => console.log(e));
  }, []);

  return (
    <div>
      <Head>
        <Meta />
      </Head>
      <Wrapper>
        {countries.length >= 1 && <CountriesList countries={countries} />}
      </Wrapper>
    </div>
  );
}

/** countries.length >= 0 &&
            countries.map((c) => {
              return <CountryCard key={c.numericCode} country={c} />;
            }) */
