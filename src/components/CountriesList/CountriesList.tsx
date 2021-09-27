import React, { useContext, useState } from 'react';
import { LanguagesList } from '../LanguagesList';
import { ContinentsContext } from '../../api/ContinentsContext';

interface Props {
  country: Country
}

export const CountriesList: React.FC<Props> = (props) => {
  const { country } = props;
  const [isCountry, setIsCountry] = useState(false);
  const { handleClick } = useContext(ContinentsContext);

  return (
    <li className="list-group-item d-flex align-items-start">
      <button
        className="btn btn-outline-primary"
        type="button"
        onClick={() => {
          handleClick(isCountry, setIsCountry);
        }}
      >
        {country.name}
      </button>
      <ul className="list-group-flush">
        {isCountry && (country.languages.map((language: Language) => (
          <LanguagesList key={language.code} language={language} />
        ))
        )}
      </ul>
    </li>
  );
};
