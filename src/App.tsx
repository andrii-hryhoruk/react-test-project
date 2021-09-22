import React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ALL_CONTINENTS } from './api/api';
import './App.scss';

import { ContinentsList } from './components/ContinentList/ContinetsList';

export const App: React.FC = () => {
  const { loading, error, data } = useQuery(GET_ALL_CONTINENTS);

  if (loading || error) {
    return <p>{error ? error.message : 'Loading...'}</p>;
  }

  return (
    <div>
      <h1>The best guide all around the world!</h1>
      <ul>
        {data.continents.map((continent: Continent) => (
          <ContinentsList key={continent.code} continent={continent} />))}
      </ul>
    </div>
  );
};
