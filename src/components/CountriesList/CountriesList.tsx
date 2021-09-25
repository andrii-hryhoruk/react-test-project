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
    <li>
      <button
        type="button"
        onClick={() => {
          handleClick(isCountry, setIsCountry);
        }}
      >
        {country.name}
      </button>
      <ul>
        {isCountry && (country.languages.map((language: Language) => (
          <LanguagesList key={language.code} language={language} />
        ))
        )}
      </ul>
    </li>
  );
};
