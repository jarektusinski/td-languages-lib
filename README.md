# td-languages-lib

TypeScript utilities and metadata for working with human languages: names, abbreviations, locales, and text orientation.

## Language Value Example

```bash
{
  name: "Yiddish";
  nativeName: "ייִדיש";
  abbreviation: "yi";
  locales: "yi-001"
  orientation: { char: "rtl", line: "ttb" };
},
{
  name: "Spanish";
  nativeName: "Español";
  abbreviation: "es";
  locales: ["es-ES" | "es-MX" | "es-US" | "es-GT" | "es-HN" | "es-SV" | "es-NI" | "es-CR" | "es-PA" | "es-AR" | "es-CO" | "es-CL" | "es-PE" | "es-VE" | "es-EC" | "es-BO" | "es-PY" | "es-UY" | "es-CU" | "es-DO" | "es-PR"];
  orientation: { char: "ltr", line: "ttb" };
},
{
  name: "Japanese";
  nativeName: "日本語";
  abbreviation: "ja";
  locales: "ja-JP";
  orientation: [{ char: "ltr", line: "ttb" }, char: "ttb", line: "rtl" }];
},
```

## Usage

```ts
import Languages from 'td-languages-lib';

// Find by English name / native name / abbreviation / region / locale / orientation
const english = Languages.by('English');
const arabic = Languages.by('العربية');
const japanese = Languages.by('ja');

// Region and locale helpers
const europe = Languages.by('Europe');
const fromLocale = Languages.by('en-GB');

// Orientation helpers
const rtl = Languages.by('rtl');

// Access raw language list
const all = Languages.LANGUAGES;
```

## API

The default export exposes:

- `by(value | value[])`
- `byName(name)`, `byNames(names)`
- `byNativeName(name)`, `byNativeNames(names)`
- `byAbbreviation(abbr)`, `byAbbreviations(abbrs)`
- `byRegion(region)`, `byRegions(regions)`
- `byLocale(locale)`, `byLocales(locales)`
- `byTextOrientation(orientation)`
- `byCharacterOrientation(orientation)`
- `byLineOrientation(orientation)`
- `LANGUAGES` (full language metadata list)
- `Orientation` (orientation constants and helpers)
