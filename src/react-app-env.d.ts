interface Continent {
  code: number;
  name: string;
  countries: Country[]
}

interface Country {
  code: number;
  name: string;
  languages: Language[]
}

interface Language {
  code: number;
  name: string;
}

interface Context {
  isContinent: boolean;
  setIsContinent: (value: boolean) => void;
  handleClick: (value: boolean, setState: (value: boolean) => void) => void;
}
