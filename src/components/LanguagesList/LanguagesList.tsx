import React, { useContext } from 'react';
import { ContinentsContext } from '../../api/ContinentsContext';

interface Props {
  language: Language;
}

export const LanguagesList: React.FC<Props> = (props) => {
  const { language } = props;
  const { handleClick, isContinent, setIsContinent } = useContext(ContinentsContext);

  return (
    <li>
      <button
        type="button"
        name="lastChild"
        onClick={() => {
          handleClick(isContinent, setIsContinent);
        }}
      >
        {language.name}
      </button>
    </li>
  );
};
