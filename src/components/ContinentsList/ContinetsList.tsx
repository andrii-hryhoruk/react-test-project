import React, { useState } from 'react';
import { CountriesList } from '../CountriesList/CountriesList';
import { ContinentsContext } from '../../api/ContinentsContext';

interface Props {
  continent: Continent
}

export const ContinentsList: React.FC<Props> = (props) => {
  const { continent } = props;
  const [isContinent, setIsContinent] = useState(false);

  const handleClick = (value: boolean,
    setState: (a: boolean) => void) => {
    setState(!value);
  };

  const providerValue = {
    handleClick,
    isContinent,
    setIsContinent,
  };

  return (
    <ContinentsContext.Provider value={providerValue}>
      <li className="list-group-item d-flex align-items-start">
        <button
          className="btn btn-outline-primary"
          type="button"
          onClick={() => {
            handleClick(isContinent, setIsContinent);
          }}
        >
          {continent.name}
        </button>

        <ul className="list-group-flush">
          {isContinent && (
            continent.countries.map((country: Country) => (
              <CountriesList key={country.code} country={country} />
            ))
          )}
        </ul>
      </li>
    </ContinentsContext.Provider>
  );
};
