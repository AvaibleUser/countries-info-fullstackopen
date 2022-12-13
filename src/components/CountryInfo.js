import DataParagraph from "./DataParagraph";
import Languages from "./Languages";
import Flag from "./Flag";

const CountryInfo = ({ country }) => (
  <div>
    <h2>{country.name.common}</h2>
    <DataParagraph title="Capital" data={country.capital} />
    <DataParagraph title="Area" data={country.area} />
    <Languages languages={country.languages} />
    <Flag url={country.flags.png} country={country.name.common} />
  </div>
);

export default CountryInfo;
