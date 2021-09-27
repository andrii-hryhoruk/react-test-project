import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONTINENTS } from './api/api';
import { ContinentsList } from './components/ContinentsList';
import 'bootstrap/scss/bootstrap.scss';
import './App.scss';

export const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CONTINENTS);

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <div className="container-sm mx-auto d-flex-column align-content-center justify-content-center p-2">
      <h1 className="d-block text-center text-primaryg">7 Continents of the World</h1>
      <ul className="list-group-flush">
        {data.continents.map((continent: Continent) => (
          <ContinentsList
            key={continent.code}
            continent={continent}
          />
        ))}
      </ul>
    </div>
  );
};
