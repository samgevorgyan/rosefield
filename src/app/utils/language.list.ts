export const languageList: Array<LanguageListInterface> = [
  { name: 'ru', flag: 'ru', selected: false, showName: 'ru' },

  { name: 'am', flag: 'am', selected: false, showName: 'հայ' },
];

export const languages = ['en', 'am'];

interface LanguageListInterface {
  name: string;
  flag: string;
  selected: boolean;
  showName: string;
}
