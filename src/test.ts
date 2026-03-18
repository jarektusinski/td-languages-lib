// Tests for `src/functions.ts`
// Jest mocks are used to make the dataset small and deterministic.

const ORI_LTR = { char: 'ltr', line: 'ttb' } as const;
const ORI_RTL = { char: 'rtl', line: 'ttb' } as const;
const ORI_TTB = { char: 'ttb', line: 'rtl' } as const;

jest.mock('td-languages-names', () => {
  const Names = {
    // key-value pairs so `val in Names` works for values too
    English: 'English',
    Arabic: 'Arabic',
    Japanese: 'Japanese',
    العربية: 'العربية',
    '日本語': '日本語',
    ENGLISH: 'English',
    ENGLISH_NATIVE: 'English',
    ARABIC: 'Arabic',
    ARABIC_NATIVE: 'العربية',
    JAPANESE: 'Japanese',
    JAPANESE_NATIVE: '日本語',
    LANGUAGES: ['English', 'Arabic', 'Japanese'],
    LANGUAGES_NATIVES: ['English', 'العربية', '日本語'],
  };

  return {
    __esModule: true,
    default: Names,
  };
});

jest.mock('td-languages-abbreviations', () => {
  const Abbr = {
    // key-value pairs so `val in Abbr` works for abbreviation values too
    en: 'en',
    ar: 'ar',
    ja: 'ja',
    ENGLISH: 'en',
    ARABIC: 'ar',
    JAPANESE: 'ja',
  };

  return {
    __esModule: true,
    default: Abbr,
  };
});

jest.mock('td-languages-locales', () => {
  const Locales = {
    REGIONS: ['Europe', 'Middle East', 'Asia'],
    REGIONALS_LANGUAGES: ['en-GB', 'ar-SA', 'ja-JP'],
  };

  return {
    __esModule: true,
    default: Locales,
  };
});

jest.mock('./orientation', () => {
  return {
    __esModule: true,
    default: {
      MULTI_TEXT_ORIENTATION: [ORI_LTR, ORI_RTL, ORI_TTB] as const,
      ORIENTATIONS: ['ltr', 'rtl', 'ttb'] as const,
    },
  };
});

jest.mock('./language', () => {
  const LANGUAGES = [
    {
      name: 'English',
      nativeName: 'English',
      abbreviation: 'en',
      region: 'Europe',
      locales: ['en-GB'],
      orientation: ORI_LTR,
    },
    {
      name: 'Arabic',
      nativeName: 'العربية',
      abbreviation: 'ar',
      region: 'Middle East',
      locales: ['ar-SA'],
      orientation: ORI_RTL,
    },
    {
      name: 'Japanese',
      nativeName: '日本語',
      abbreviation: 'ja',
      region: 'Asia',
      locales: ['ja-JP'],
      orientation: [ORI_LTR, ORI_TTB],
    },
  ] as const;

  return {
    __esModule: true,
    default: { LANGUAGES },
  };
});

import Functions from './functions';

type TestLanguage = {
  name: string;
  nativeName: string;
  abbreviation: string;
  region: string;
  locales: readonly string[];
  orientation: unknown;
};

const namesOf = (langs: unknown): string[] =>
  (langs as TestLanguage[]).map(l => l.name);

describe('functions.ts', () => {
  describe('basic selectors', () => {
    test('byName returns a single language (positive path)', () => {
      const res = Functions.byName('English' as unknown as never) as unknown as TestLanguage;
      expect(res).toMatchObject({ name: 'English', abbreviation: 'en' });
    });

    test('byNames returns languages for provided names', () => {
      const res = Functions.byNames(['English', 'Japanese'] as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['English', 'Japanese']);
    });

    test('byNativeName returns a single language (positive path)', () => {
      const res = Functions.byNativeName('العربية' as unknown as never) as unknown as TestLanguage;
      expect(res).toMatchObject({ name: 'Arabic', abbreviation: 'ar' });
    });

    test('byNativeNames returns languages for provided native names', () => {
      const res = Functions.byNativeNames(['English', '日本語'] as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['English', 'Japanese']);
    });

    test('byAbbreviation returns a single language (positive path)', () => {
      const res = Functions.byAbbreviation('ja' as unknown as never) as unknown as TestLanguage;
      expect(res).toMatchObject({ name: 'Japanese' });
    });

    test('byAbbreviations returns languages for provided abbreviations', () => {
      const res = Functions.byAbbreviations(['ar', 'en'] as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['English', 'Arabic']);
    });
  });

  describe('region and locale selectors', () => {
    test('byRegion returns languages in the given region', () => {
      const res = Functions.byRegion('Asia' as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['Japanese']);
    });

    test('byRegions returns languages in the given regions', () => {
      const res = Functions.byRegions(['Europe', 'Middle East'] as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['English', 'Arabic']);
    });

    test('byLocale returns a single language for matching locale', () => {
      const res = Functions.byLocale('en-GB' as unknown as never) as unknown as TestLanguage;
      expect(res).toMatchObject({ name: 'English' });
    });

    test('byLocales returns languages when any locale matches', () => {
      const res = Functions.byLocales(['ja-JP', 'ar-SA'] as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['Arabic', 'Japanese']);
    });
  });

  describe('orientation selectors', () => {
    test('byTextOrientation returns languages that support given text orientation', () => {
      const res = Functions.byTextOrientation(ORI_TTB as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['Japanese']);
    });

    test('byCharacterOrientation returns languages with matching char orientation', () => {
      const res = Functions.byCharacterOrientation('rtl' as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['Arabic']);
    });

    test('byLineOrientation returns languages with matching line orientation', () => {
      const res = Functions.byLineOrientation('rtl' as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['Japanese']);
    });

    test('byTextOrientation matches single-orientation languages too', () => {
      const res = Functions.byTextOrientation(ORI_LTR as unknown as never) as unknown;
      expect(namesOf(res)).toEqual(['English', 'Japanese']);
    });
  });

  describe('by(...) dispatcher', () => {
    test('by(LanguageName) returns a single Language', () => {
      const res = Functions.by('English' as unknown as never) as unknown as TestLanguage;
      expect(res).toMatchObject({ abbreviation: 'en' });
    });

    test('by(LanguageNativeName) returns a single Language', () => {
      const res = Functions.by('日本語' as unknown as never) as unknown as TestLanguage;
      expect(res).toMatchObject({ name: 'Japanese' });
    });

    test('by(LanguageAbbreviation) returns a single Language', () => {
      const res = Functions.by('ar' as unknown as never) as unknown as TestLanguage;
      expect(res).toMatchObject({ name: 'Arabic' });
    });

    test('by(Region) returns an array of Languages', () => {
      const res = Functions.by('Europe' as unknown as never) as unknown;
      // In this dataset Europe contains exactly 1 language, so dispatcher returns a single item
      expect(res).toMatchObject({ name: 'English', region: 'Europe' });
    });

    test('by(RegionalLanguage) returns a single Language', () => {
      const res = Functions.by('ar-SA' as unknown as never) as unknown as TestLanguage;
      expect(res).toMatchObject({ name: 'Arabic' });
    });

    test('by(TextOrientation) returns an array of Languages', () => {
      const res = Functions.by(ORI_RTL as unknown as never) as unknown;
      // In this dataset this matches exactly 1 language, so dispatcher returns a single item
      expect(res).toMatchObject({ name: 'Arabic' });
    });

    test('by(Orientation) returns an array (union of char+line matches)', () => {
      const res = Functions.by('rtl' as unknown as never) as unknown;
      // Arabic matches by char='rtl', Japanese matches by line='rtl'
      expect(namesOf(res).sort()).toEqual(['Arabic', 'Japanese']);
    });

    test('by([...]) returns multiple results', () => {
      const res = Functions.by(['English', 'Asia'] as unknown as never) as unknown;
      expect(namesOf(res).sort()).toEqual(['English', 'Japanese']);
    });

    test('by(unknown) returns an empty array', () => {
      const res = Functions.by('does-not-exist' as unknown as never) as unknown;
      expect(res).toEqual([]);
    });
  });

  describe('error paths (runtime misuse)', () => {
    test('byNames throws when argument is not an array', () => {
      const fn = Functions.byNames as unknown as (v: unknown) => unknown;
      expect(() => fn(null)).toThrow(TypeError);
    });

    test('byRegions throws when argument is not an array', () => {
      const fn = Functions.byRegions as unknown as (v: unknown) => unknown;
      expect(() => fn(undefined)).toThrow(TypeError);
    });

    test('byLocales throws when argument is not an array', () => {
      const fn = Functions.byLocales as unknown as (v: unknown) => unknown;
      expect(() => fn('ja-JP')).toThrow(TypeError);
    });

    test('byNativeNames throws when argument is not an array', () => {
      const fn = Functions.byNativeNames as unknown as (v: unknown) => unknown;
      expect(() => fn(123)).toThrow(TypeError);
    });

    test('byAbbreviations throws when argument is not an array', () => {
      const fn = Functions.byAbbreviations as unknown as (v: unknown) => unknown;
      expect(() => fn({})).toThrow(TypeError);
    });
  });
});

