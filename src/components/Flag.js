/**
 * Holds the flag of a country
 * @param {{
 *   url: string,
 *   country: string
 * }} props
 */
const Flag = ({ url, country }) => (
  <img src={url} alt={`${country} flag`} width="150px" />
);

export default Flag;
