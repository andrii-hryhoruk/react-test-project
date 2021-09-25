// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React, { useState } from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONTINENTS } from './api/api';
import { ContinentsList } from './components/ContinentsList';
import { ContinentsContext } from './api/ContinentsContext';
import './App.scss';

export const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CONTINENTS);
  const [isContinent, setIsContinent] = useState(false);

  const handleClick = (value: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>) => {
    setState(!value);
  };

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  const providerValue = {
    handleClick,
    isContinent,
    setIsContinent,
  };

  return (
    <ContinentsContext.Provider value={providerValue}>
      <div>
        <h1>7 Continents of the World</h1>
        <ul>
          {data.continents.map((continent: Continent) => (
            <ContinentsList
              key={continent.code}
              continent={continent}
            />
          ))}
        </ul>
      </div>
    </ContinentsContext.Provider>
  );
};
