import React from 'react';

export const ContinentsContext = React.createContext({
  handleClick: (value: boolean,
    setState: React.Dispatch<React.SetStateAction<boolean>>) => setState(!value),
  isContinent: false,
  setIsContinent: as React.Dispatch<React.SetStateAction<boolean>>,
});
