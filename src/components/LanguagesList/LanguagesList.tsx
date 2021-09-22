import React from 'react';

interface Props {
  language: Language;
}

export const LanguagesList: React.FC<Props> = (props) => {
  const { language } = props;

  return (
    <li>
      <p>{language.name}</p>
    </li>
  );
};
