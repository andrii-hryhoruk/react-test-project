import React from 'react';
import { LanguagesList } from '../LanguagesList/LanguagesList';

interface Props {
  country: Country
}

export const CountriesList: React.FC<Props> = (props) => {
  const { country } = props;

  return (
    <li>
      <p>{country.name}</p>
      <ul>
        {country.languages.map((language: Language) => (
          <LanguagesList key={language.code} language={language} />
        ))}
      </ul>
    </li>
  );
};
