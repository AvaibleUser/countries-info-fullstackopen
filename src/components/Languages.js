const Languages = ({ languages }) => {
  const languagesList = Object.values(languages).map((language) => (
    <li key={language}>{language}</li>
  ));

  return (
    <div>
      <h3>Languages:</h3>
      <ul>{languagesList}</ul>
    </div>
  );
};

export default Languages;
