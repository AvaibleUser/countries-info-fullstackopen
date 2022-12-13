import React from "react";
import { useState, useEffect } from "react";

import axios from "axios";

import CountryInfo from "./components/CountryInfo";
import Countries from "./components/Countries";
import Filter from "./components/ControlledInput";

const App = () => {
  const [countries, setCountries] = useState([]);
  const [filter, setFilter] = useState("");

  const filtered = countries.filter(({ name }) => {
    const regexFilter = new RegExp(filter, "i");
    return regexFilter.test(name.common);
  });

  const getCountries = () => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then(({ data: countries }) =>
        setCountries(
          countries.sort(({ name: a }, { name: b }) =>
            a.common.localeCompare(b.common)
          )
        )
      )
      .catch((reason) => console.log(reason));
  };

  useEffect(() => getCountries(), []);

  const filterInput = (
    <Filter title="find countries" value={filter} setValue={setFilter} />
  );

  if (!filter.length) {
    return <div>{filterInput}</div>;
  }

  if (filtered.length === 1) {
    return (
      <div>
        {filterInput}
        <CountryInfo country={filtered[0]} />
      </div>
    );
  }

  const countriesHolder =
    filtered.length <= 10 ? (
      <Countries countries={filtered} />
    ) : (
      <p>Too many matches, specify another filter</p>
    );

  return (
    <div>
      {filterInput}
      <br />
      {countriesHolder}
    </div>
  );
};

export default App;
