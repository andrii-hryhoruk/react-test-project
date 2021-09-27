import React, { useContext } from 'react';
import { ContinentsContext } from '../../api/ContinentsContext';

interface Props {
  language: Language;
}

export const LanguagesList: React.FC<Props> = (props) => {
  const { language } = props;
  const { isContinent, setIsContinent } = useContext(ContinentsContext);

  return (
    <li className="list-group-item d-flex align-items-start">
      <button
        className="btn btn-outline-primary"
        type="button"
        name="lastChild"
        onClick={() => {
          setIsContinent(!isContinent);
        }}
      >
        {language.name}
      </button>
    </li>
  );
};
