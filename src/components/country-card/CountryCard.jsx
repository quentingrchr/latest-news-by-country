import React from "react";
import Link from "next/link";
import { Card, Li } from "./CountryCard.style";

export default function CountryCard({ country, animationDelay }) {
  const { alpha2Code, name, flag, nativeName, region } = country;
  return (
    <Li
      animate={{
        opacity: 1,
      }}
      transition={{
        duration: 0.2,
        delay: animationDelay,
      }}
    >
      <Link href="/[country].js" as={`/${alpha2Code}`}>
        <Card>
          <h2>{nativeName}</h2>
          <img src={flag} alt="flag" />
        </Card>
      </Link>
    </Li>
  );
}
