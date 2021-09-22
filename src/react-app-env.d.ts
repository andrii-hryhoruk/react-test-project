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

interface ContinentsData {
  continents: Continent[];
}
