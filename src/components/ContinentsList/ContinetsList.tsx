import React, { useContext, useState } from 'react';
import { CountriesList } from '../CountriesList/CountriesList';
import { ContinentsContext } from '../../api/ContinentsContext';

interface Props {
  continent: Continent
}

export const ContinentsList: React.FC<Props> = (props) => {
  const { continent } = props;
  const { handleClick } = useContext(ContinentsContext);
  const [isContinent, setIsContinent] = useState(false);

  return (
    <li>
      <button
        type="button"
        onClick={() => {
          handleClick(isContinent, setIsContinent);
        }}
      >
        {continent.name}
      </button>

      <ul>
        {isContinent && (
          continent.countries.map((country: Country) => (
            <CountriesList key={country.code} country={country} />
          ))
        )}
      </ul>
    </li>
  );
};
