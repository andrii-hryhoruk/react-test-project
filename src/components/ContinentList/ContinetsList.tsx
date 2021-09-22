import React from 'react';
import { CountriesList } from '../CountriesList/CountriesList';

interface Props {
  continent: Continent
}

export const ContinentsList: React.FC<Props> = (props) => {
  const { continent } = props;

  return (
    <li>
      <p>{continent.name}</p>

      <ul>
        {continent.countries.map((country: Country) => (
          <CountriesList key={country.code} country={country} />
        ))}
      </ul>
    </li>
  );
};
