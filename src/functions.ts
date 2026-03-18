import Names, { LanguageName, LanguageNativeName } from 'td-languages-names';
import Abbr, { LanguageAbbreviation } from 'td-languages-abbreviations';
import Locales, { Region, RegionalLanguage } from 'td-languages-locales';
import Orien, { Orientation, TextOrientation } from './orientation';
import Lang, { Language } from './language';

const { LANGUAGES } = Lang;
const { REGIONS, REGIONALS_LANGUAGES } = Locales;
const { MULTI_TEXT_ORIENTATION, ORIENTATIONS } = Orien;
/** @internal */
type LanguageQuery =
  | LanguageName
  | LanguageNativeName
  | LanguageAbbreviation
  | Region
  | RegionalLanguage
  | TextOrientation
  | Orientation;

const byName = (name: LanguageName): Language =>
  LANGUAGES.find(language => language.name === name) as Language;

const byNames = (names: LanguageName[]): Language[] =>
  LANGUAGES.filter(language => names.includes(language.name));

const byNativeName = (name: LanguageNativeName): Language =>
  LANGUAGES.find(language => language.nativeName === name) as Language;

const byNativeNames = (names: LanguageNativeName[]): Language[] =>
  LANGUAGES.filter(language => names.includes(language.nativeName));

const byAbbreviation = (abbr: LanguageAbbreviation): Language =>
  LANGUAGES.find(language => language.abbreviation === abbr) as Language;

const byAbbreviations = (abbrs: LanguageAbbreviation[]): Language[] =>
  LANGUAGES.filter(language => abbrs.includes(language.abbreviation));

const byRegion = (region: Region): Language[] =>
  LANGUAGES.filter(language => language.region === region);

const byRegions = (regions: Region[]): Language[] =>
  LANGUAGES.filter(language => regions.includes(language.region));

const byLocale = (locale: RegionalLanguage): Language =>
  LANGUAGES.find(language => [language.locales].flat().includes(locale)) as Language;

const byLocales = (locales: RegionalLanguage[]): Language[] =>
  LANGUAGES.filter(language => locales.some(locale => [language.locales].flat().includes(locale)));

const byTextOrientation = (orientation: TextOrientation): Language[] =>
  LANGUAGES.filter(language => [language.orientation].flat().includes(orientation));

const byCharacterOrientation = (orientation: Orientation): Language[] =>
  LANGUAGES.filter(language => [language.orientation].flat().some((o: TextOrientation) => o.char === orientation));

const byLineOrientation = (orientation: Orientation): Language[] =>
  LANGUAGES.filter(language => [language.orientation].flat().some((o: TextOrientation) => o.line === orientation));

const by = (value: LanguageQuery | LanguageQuery[]): Language | Language[] => {
  const languages: Language[] = [];
  const values = [value].flat();

  values.forEach((val: LanguageQuery) => {
    if ((val as string) in Names) {
      if (Names.LANGUAGES.includes(val as LanguageName)) {
        languages.push(byName(val as LanguageName));
      } else if (Names.LANGUAGES_NATIVES.includes(val as LanguageNativeName)) {
        languages.push(byNativeName(val as LanguageNativeName));
      }
    }
    else if ((val as string) in Abbr) languages.push(byAbbreviation(val as LanguageAbbreviation));
    else if (REGIONS.includes(val as Region)) languages.push(...byRegion(val as Region));
    else if (REGIONALS_LANGUAGES.includes(val as RegionalLanguage)) languages.push(byLocale(val as RegionalLanguage));
    else if (MULTI_TEXT_ORIENTATION.includes(val as TextOrientation)) languages.push(...byTextOrientation(val as TextOrientation));
    else if (ORIENTATIONS.includes(val as Orientation)) {
      languages.push(...byCharacterOrientation(val as Orientation));
      languages.push(...byLineOrientation(val as Orientation));
    }
  });

  return languages.length === 1 ? languages[0] : languages;
};

export default {
  by,
  byName,
  byNames,
  byRegion,
  byRegions,
  byLocale,
  byLocales,
  byNativeName,
  byNativeNames,
  byAbbreviation,
  byAbbreviations,
  byTextOrientation,
  byLineOrientation,
  byCharacterOrientation,
};
