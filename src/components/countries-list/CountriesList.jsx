import React, { useState } from "react";
import CountryCard from "../country-card/CountryCard";
import { Ul, H2, Header, InputBar, NotFound } from "./CountriesList.styles";

export default function CountriesList({ countries }) {
  const [value, setValue] = useState("");

  const filteredCountries = countries.filter((c) => {
    const v = value.toLocaleLowerCase();
    if (value) {
      if (
        c.name.toLowerCase().includes(v) ||
        c.nativeName.toLowerCase().includes(v) ||
        c.region.toLowerCase().includes(v) ||
        c.alpha2Code.toLowerCase().includes(v)
      ) {
        return true;
      } else {
        return false;
      }
    }
    return true;
  });

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      <Header>
        <H2>Choose a country</H2>
        <InputBar>
          <input
            type="text"
            value={value}
            onChange={handleChange}
            placeholder="Ex: Brasil"
          />
        </InputBar>
      </Header>
      <Ul>
        {filteredCountries.length >= 1 ? (
          filteredCountries.map((c, i) => (
            <CountryCard
              country={c}
              animationDelay={0.2 * i}
              key={c.alpha2Code}
            />
          ))
        ) : (
          <NotFound>No country found</NotFound>
        )}
      </Ul>
    </>
  );
}
