import React from 'react';

export const ContinentsContext = React.createContext<Context>({
  handleClick: () => {},
  isContinent: false,
  setIsContinent: () => false,
});
