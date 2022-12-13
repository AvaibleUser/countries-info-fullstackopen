import CountryItem from "./CountryItem";

const Countries = ({ countries }) =>
  countries.map((country) => (
    <CountryItem country={country} key={country.name.common} />
  ));

export default Countries;
