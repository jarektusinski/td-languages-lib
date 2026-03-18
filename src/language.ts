import Names, { LanguageName, LanguageNativeName } from 'td-languages-names';
import Abbr, { LanguageAbbreviation } from 'td-languages-abbreviations';
import Locales, { Region, MultiRegionalLanguage } from 'td-languages-locales';
import Orientation, { MultiTextOrientation } from './orientation';

const {
  LEFT_TO_RIGHT_TEXT_ORIENTATION,
  RIGHT_TO_LEFT_TEXT_ORIENTATION,
  TOP_TO_BOTTOM_TEXT_ORIENTATION,
} = Orientation;

interface LanguageProperties {
  name: LanguageName;
  nativeName: LanguageNativeName;
  abbreviation: LanguageAbbreviation;
  locales: MultiRegionalLanguage;
  region: Region;
  orientation: MultiTextOrientation;
}

/** @internal */
const createLanguageProperties = (name: LanguageName, region: Region, byRegion = true): LanguageProperties => {
  const nameSelector = name.toUpperCase();
  return {
    name,
    region,
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    nativeName: Names[`${nameSelector}_NATIVE`],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    abbreviation: Abbr[nameSelector],
    // eslint-disable-next-line @typescript-eslint/ban-ts-comment
    // @ts-expect-error
    locales: byRegion ? Locales[region][`${nameSelector}_LANGUAGES`] : Locales[`${nameSelector}_LANGUAGES`],
    orientation: LEFT_TO_RIGHT_TEXT_ORIENTATION,
  };
};

const ACEHNESE = {
  ...createLanguageProperties('Acehnese', 'Asia'),
  orientation: [LEFT_TO_RIGHT_TEXT_ORIENTATION, RIGHT_TO_LEFT_TEXT_ORIENTATION],
} as const;

const AFRIKAANS = { ...createLanguageProperties('Afrikaans', 'Africa') } as const;

const AKAN = { ...createLanguageProperties('Akan', 'Africa') } as const;

const ALBANIAN = { ...createLanguageProperties('Albanian', 'Europe') } as const;

const AMHARIC = { ...createLanguageProperties('Amharic', 'Africa') } as const;

const ARABIC = {
  ...createLanguageProperties('Arabic', 'Middle East', false),
  orientation: RIGHT_TO_LEFT_TEXT_ORIENTATION,
} as const;

const ARMENIAN = { ...createLanguageProperties('Armenian', 'Europe') } as const;

const ASSAMESE = { ...createLanguageProperties('Assamese', 'Asia') } as const;

const AWADHI = { ...createLanguageProperties('Awadhi', 'Asia') } as const;

const AYMARA = { ...createLanguageProperties('Aymara', 'South America') } as const;

const AZERBAIJANI = { ...createLanguageProperties('Azerbaijani', 'Europe') } as const;

const BALINESE = { ...createLanguageProperties('Balinese', 'Asia') } as const;

const BAMBARA = { ...createLanguageProperties('Bambara', 'Africa') } as const;

const BANJAR = { ...createLanguageProperties('Banjar', 'Asia') } as const;

const BASHKIR = { ...createLanguageProperties('Bashkir', 'Asia') } as const;

const BASQUE = { ...createLanguageProperties('Basque', 'Europe') } as const;

const BATAK = { ...createLanguageProperties('Batak', 'Asia') } as const;

const BELARUSIAN = { ...createLanguageProperties('Belarusian', 'Europe') } as const;

const BEMBA = { ...createLanguageProperties('Bemba', 'Africa') } as const;

const BENGALI = { ...createLanguageProperties('Bengali', 'Asia') } as const;

const BHOJPURI = { ...createLanguageProperties('Bhojpuri', 'Asia') } as const;

const BIKOL = { ...createLanguageProperties('Bikol', 'Asia') } as const;

const BOSNIAN = { ...createLanguageProperties('Bosnian', 'Europe') } as const;

const BRETON = { ...createLanguageProperties('Breton', 'Europe') } as const;

const BUGINESE = { ...createLanguageProperties('Buginese', 'Asia') } as const;

const BULGARIAN = { ...createLanguageProperties('Bulgarian', 'Europe') } as const;

const BURMESE = { ...createLanguageProperties('Burmese', 'Asia') } as const;

const CANTONESE = { ...createLanguageProperties('Cantonese', 'Asia') } as const;

const CATALAN = { ...createLanguageProperties('Catalan', 'Europe') } as const;

const CEBUANO = { ...createLanguageProperties('Cebuano', 'Asia') } as const;

const CHHATTISGARHI = { ...createLanguageProperties('Chhattisgarhi', 'Asia') } as const;

const CHINESE = {
  ...createLanguageProperties('Chinese', 'Asia'),
  orientation: [LEFT_TO_RIGHT_TEXT_ORIENTATION, TOP_TO_BOTTOM_TEXT_ORIENTATION],
} as const;

const CHITTAGONIAN = { ...createLanguageProperties('Chittagonian', 'Asia') } as const;

const CHUVASH = { ...createLanguageProperties('Chuvash', 'Asia') } as const;

const CORSICAN = { ...createLanguageProperties('Corsican', 'Europe') } as const;

const CREE = { ...createLanguageProperties('Cree', 'North America') } as const;

const CROATIAN = { ...createLanguageProperties('Croatian', 'Europe') } as const;

const CZECH = { ...createLanguageProperties('Czech', 'Europe') } as const;

const DANISH = { ...createLanguageProperties('Danish', 'Europe') } as const;

const DARI = {
  ...createLanguageProperties('Dari', 'Middle East'),
  orientation: RIGHT_TO_LEFT_TEXT_ORIENTATION,
} as const;

const DHOLUO = { ...createLanguageProperties('Dholuo', 'Africa') } as const;

const DUTCH = { ...createLanguageProperties('Dutch', 'Europe') } as const;

const DZONGKHA = { ...createLanguageProperties('Dzongkha', 'Asia') } as const;

const ENGLISH = { ...createLanguageProperties('English', 'Europe', false) } as const;

const ESPERANTO = { ...createLanguageProperties('Esperanto', 'Europe') } as const;

const ESTONIAN = { ...createLanguageProperties('Estonian', 'Europe') } as const;

const EWE = { ...createLanguageProperties('Ewe', 'Africa') } as const;

const FAROESE = { ...createLanguageProperties('Faroese', 'Europe') } as const;

const FIJIAN = { ...createLanguageProperties('Fijian', 'Oceania') } as const;

const FILIPINO = { ...createLanguageProperties('Filipino', 'Asia') } as const;

const FINNISH = { ...createLanguageProperties('Finnish', 'Europe') } as const;

const FRENCH = { ...createLanguageProperties('French', 'Europe', false) } as const;

const FRISIAN = { ...createLanguageProperties('Frisian', 'Europe') } as const;

const FULANI = { ...createLanguageProperties('Fulani', 'Africa') } as const;

const GA = { ...createLanguageProperties('Ga', 'Africa') } as const;

const GALICIAN = { ...createLanguageProperties('Galician', 'Europe') } as const;

const GAN = { ...createLanguageProperties('Gan', 'Asia') } as const;

const GARHWALI = { ...createLanguageProperties('Garhwali', 'Asia') } as const;

const GEORGIAN = { ...createLanguageProperties('Georgian', 'Europe') } as const;

const GERMAN = { ...createLanguageProperties('German', 'Europe') } as const;

const GONDI = { ...createLanguageProperties('Gondi', 'Asia') } as const;

const GREEK = { ...createLanguageProperties('Greek', 'Europe') } as const;

const GUARANI = { ...createLanguageProperties('Guarani', 'South America') } as const;

const GUJARATI = { ...createLanguageProperties('Gujarati', 'Asia') } as const;

const HAKKA = { ...createLanguageProperties('Hakka', 'Asia') } as const;

const HARYANVI = { ...createLanguageProperties('Haryanvi', 'Asia') } as const;

const HAUSA = { ...createLanguageProperties('Hausa', 'Africa') } as const;

const HAWAIIAN = { ...createLanguageProperties('Hawaiian', 'North America') } as const;

const HEBREW = {
  ...createLanguageProperties('Hebrew', 'Middle East'),
  orientation: RIGHT_TO_LEFT_TEXT_ORIENTATION,
} as const;

const HILIGAYNON = { ...createLanguageProperties('Hiligaynon', 'Asia') } as const;

const HINDI = { ...createLanguageProperties('Hindi', 'Asia') } as const;

const HMONG = { ...createLanguageProperties('Hmong', 'Asia') } as const;

const HUNGARIAN = { ...createLanguageProperties('Hungarian', 'Europe') } as const;

const ICELANDIC = { ...createLanguageProperties('Icelandic', 'Europe') } as const;

const IGBO = { ...createLanguageProperties('Igbo', 'Africa') } as const;

const ILOCANO = { ...createLanguageProperties('Ilocano', 'Asia') } as const;

const INDONESIAN = { ...createLanguageProperties('Indonesian', 'Asia') } as const;

const INUKTITUT = { ...createLanguageProperties('Inuktitut', 'North America') } as const;

const IRISH = { ...createLanguageProperties('Irish', 'Europe') } as const;

const ITALIAN = { ...createLanguageProperties('Italian', 'Europe') } as const;

const JAPANESE = {
  ...createLanguageProperties('Japanese', 'Asia'),
  orientation: [LEFT_TO_RIGHT_TEXT_ORIENTATION, TOP_TO_BOTTOM_TEXT_ORIENTATION],
} as const;

const JAVANESE = { ...createLanguageProperties('Javanese', 'Asia') } as const;

const KABYLE = { ...createLanguageProperties('Kabyle', 'Africa') } as const;

const KAMBA = { ...createLanguageProperties('Kamba', 'Africa') } as const;

const KANNADA = { ...createLanguageProperties('Kannada', 'Asia') } as const;

const KANURI = { ...createLanguageProperties('Kanuri', 'Africa') } as const;

const KAPAMPANGAN = { ...createLanguageProperties('Kapampangan', 'Asia') } as const;

const KAREN = { ...createLanguageProperties('Karen', 'Asia') } as const;

const KASHMIRI = {
  ...createLanguageProperties('Kashmiri', 'Asia'),
  orientation: [LEFT_TO_RIGHT_TEXT_ORIENTATION, RIGHT_TO_LEFT_TEXT_ORIENTATION],
} as const;

const KASHUBIAN = { ...createLanguageProperties('Kashubian', 'Europe') } as const;

const KAZAKH = { ...createLanguageProperties('Kazakh', 'Asia') } as const;

const KHMER = { ...createLanguageProperties('Khmer', 'Asia') } as const;

const KIKUYU = { ...createLanguageProperties('Kikuyu', 'Africa') } as const;

const KINYARWANDA = { ...createLanguageProperties('Kinyarwanda', 'Africa') } as const;

const KIRUNDI = { ...createLanguageProperties('Kirundi', 'Africa') } as const;

const KOMI = { ...createLanguageProperties('Komi', 'Asia') } as const;

const KONKANI = { ...createLanguageProperties('Konkani', 'Asia') } as const;

const KOREAN = {
  ...createLanguageProperties('Korean', 'Asia'),
  orientation: [LEFT_TO_RIGHT_TEXT_ORIENTATION, TOP_TO_BOTTOM_TEXT_ORIENTATION],
} as const;

const KURDISH = {
  ...createLanguageProperties('Kurdish', 'Middle East'),
  orientation: [LEFT_TO_RIGHT_TEXT_ORIENTATION, RIGHT_TO_LEFT_TEXT_ORIENTATION],
} as const;

const KYRGYZ = { ...createLanguageProperties('Kyrgyz', 'Asia') } as const;

const LAO = { ...createLanguageProperties('Lao', 'Asia') } as const;

const LATIN = { ...createLanguageProperties('Latin', 'Europe') } as const;

const LATVIAN = { ...createLanguageProperties('Latvian', 'Europe') } as const;

const LIGURIAN = { ...createLanguageProperties('Ligurian', 'Europe') } as const;

const LIMBURGISH = { ...createLanguageProperties('Limburgish', 'Europe') } as const;

const LINGALA = { ...createLanguageProperties('Lingala', 'Africa') } as const;

const LITHUANIAN = { ...createLanguageProperties('Lithuanian', 'Europe') } as const;

const LOMBARD = { ...createLanguageProperties('Lombard', 'Europe') } as const;

const LUGANDA = { ...createLanguageProperties('Luganda', 'Africa') } as const;

const LUO = { ...createLanguageProperties('Luo', 'Africa') } as const;

const LUXEMBOURGISH = { ...createLanguageProperties('Luxembourgish', 'Europe') } as const;

const MACEDONIAN = { ...createLanguageProperties('Macedonian', 'Europe') } as const;

const MADURESE = { ...createLanguageProperties('Madurese', 'Asia') } as const;

const MAITHILI = { ...createLanguageProperties('Maithili', 'Asia') } as const;

const MAKASSAR = { ...createLanguageProperties('Makassar', 'Asia') } as const;

const MALAGASY = { ...createLanguageProperties('Malagasy', 'Africa') } as const;

const MALAY = { ...createLanguageProperties('Malay', 'Asia') } as const;

const MALAYALAM = { ...createLanguageProperties('Malayalam', 'Asia') } as const;

const MALTESE = { ...createLanguageProperties('Maltese', 'Europe') } as const;

const MANDARIN = { ...createLanguageProperties('Mandarin', 'Asia') } as const;

const MANIPURI = { ...createLanguageProperties('Manipuri', 'Asia') } as const;

const MAORI = { ...createLanguageProperties('Maori', 'Oceania') } as const;

const MAPUDUNGUN = { ...createLanguageProperties('Mapudungun', 'South America') } as const;

const MARANAO = { ...createLanguageProperties('Maranao', 'Asia') } as const;

const MARATHI = { ...createLanguageProperties('Marathi', 'Asia') } as const;

const MARWARI = { ...createLanguageProperties('Marwari', 'Asia') } as const;

const MAYA = { ...createLanguageProperties('Maya', 'North America') } as const;

const MEITEI = { ...createLanguageProperties('Meitei', 'Asia') } as const;

const MERU = { ...createLanguageProperties('Meru', 'Africa') } as const;

const MINANGKABAU = { ...createLanguageProperties('Minangkabau', 'Asia') } as const;

const MIRANDESE = { ...createLanguageProperties('Mirandese', 'Europe') } as const;

const MIXTEC = { ...createLanguageProperties('Mixtec', 'North America') } as const;

const MON = { ...createLanguageProperties('Mon', 'Asia') } as const;

const MONGOLIAN = { ...createLanguageProperties('Mongolian', 'Asia') } as const;

const MONTENEGRIN = { ...createLanguageProperties('Montenegrin', 'Europe') } as const;

const MOSSI = { ...createLanguageProperties('Mossi', 'Africa') } as const;

const NAHUATL = { ...createLanguageProperties('Nahuatl', 'North America') } as const;

const NAVAJO = { ...createLanguageProperties('Navajo', 'North America') } as const;

const NEPALI = { ...createLanguageProperties('Nepali', 'Asia') } as const;

const NEWAR = { ...createLanguageProperties('Newar', 'Asia') } as const;

const NORWEGIAN = { ...createLanguageProperties('Norwegian', 'Europe') } as const;

const NYANJA = { ...createLanguageProperties('Nyanja', 'Africa') } as const;

const OCCITAN = { ...createLanguageProperties('Occitan', 'Europe') } as const;

const ODIA = { ...createLanguageProperties('Odia', 'Asia') } as const;

const OJIBWE = { ...createLanguageProperties('Ojibwe', 'North America') } as const;

const OROMO = { ...createLanguageProperties('Oromo', 'Africa') } as const;

const PANGASINAN = { ...createLanguageProperties('Pangasinan', 'Asia') } as const;

const PASHTO = {
  ...createLanguageProperties('Pashto', 'Middle East'),
  orientation: RIGHT_TO_LEFT_TEXT_ORIENTATION,
} as const;

const PERSIAN = {
  ...createLanguageProperties('Persian', 'Middle East'),
  orientation: RIGHT_TO_LEFT_TEXT_ORIENTATION,
} as const;

const POLISH = { ...createLanguageProperties('Polish', 'Europe') } as const;

const PORTUGUESE = { ...createLanguageProperties('Portuguese', 'Europe', false) } as const;

const PUNJABI = {
  ...createLanguageProperties('Punjabi', 'Asia'),
  orientation: [LEFT_TO_RIGHT_TEXT_ORIENTATION, RIGHT_TO_LEFT_TEXT_ORIENTATION],
} as const;

const QUECHUA = { ...createLanguageProperties('Quechua', 'South America') } as const;

const RAJASTHANI = { ...createLanguageProperties('Rajasthani', 'Asia') } as const;

const ROHINGYA = { ...createLanguageProperties('Rohingya', 'Asia') } as const;

const ROMANI = { ...createLanguageProperties('Romani', 'Europe') } as const;

const ROMANIAN = { ...createLanguageProperties('Romanian', 'Europe') } as const;

const ROMANSH = { ...createLanguageProperties('Romansh', 'Europe') } as const;

const RUSSIAN = { ...createLanguageProperties('Russian', 'Europe') } as const;

const SAMOAN = { ...createLanguageProperties('Samoan', 'Oceania') } as const;

const SANGO = { ...createLanguageProperties('Sango', 'Africa') } as const;

const SANSKRIT = { ...createLanguageProperties('Sanskrit', 'Asia') } as const;

const SANTALI = { ...createLanguageProperties('Santali', 'Asia') } as const;

const SARDINIAN = { ...createLanguageProperties('Sardinian', 'Europe') } as const;

const SCOTS = { ...createLanguageProperties('Scots', 'Europe') } as const;

const SERBIAN = { ...createLanguageProperties('Serbian', 'Europe') } as const;

const SESOTHO = { ...createLanguageProperties('Sesotho', 'Africa') } as const;

const SHAN = { ...createLanguageProperties('Shan', 'Asia') } as const;

const SHONA = { ...createLanguageProperties('Shona', 'Africa') } as const;

const SICILIAN = { ...createLanguageProperties('Sicilian', 'Europe') } as const;

const SILESIAN = { ...createLanguageProperties('Silesian', 'Europe') } as const;

const SINDHI = {
  ...createLanguageProperties('Sindhi', 'Asia'),
  orientation: RIGHT_TO_LEFT_TEXT_ORIENTATION,
} as const;

const SINHALA = { ...createLanguageProperties('Sinhala', 'Asia') } as const;

const SLOVAK = { ...createLanguageProperties('Slovak', 'Europe') } as const;

const SLOVENIAN = { ...createLanguageProperties('Slovenian', 'Europe') } as const;

const SOMALI = { ...createLanguageProperties('Somali', 'Africa') } as const;

const SONINKE = { ...createLanguageProperties('Soninke', 'Africa') } as const;

const SPANISH = { ...createLanguageProperties('Spanish', 'Europe', false) } as const;

const SUNDANESE = { ...createLanguageProperties('Sundanese', 'Asia') } as const;

const SWAHILI = { ...createLanguageProperties('Swahili', 'Africa') } as const;

const SWATI = { ...createLanguageProperties('Swati', 'Africa') } as const;

const SWEDISH = { ...createLanguageProperties('Swedish', 'Europe') } as const;

const SYLHETI = { ...createLanguageProperties('Sylheti', 'Asia') } as const;

const TAGALOG = { ...createLanguageProperties('Tagalog', 'Asia') } as const;

const TAHITIAN = { ...createLanguageProperties('Tahitian', 'Oceania') } as const;

const TAJIK = { ...createLanguageProperties('Tajik', 'Asia') } as const;

const TAMIL = { ...createLanguageProperties('Tamil', 'Asia') } as const;

const TATAR = { ...createLanguageProperties('Tatar', 'Asia') } as const;

const TELUGU = { ...createLanguageProperties('Telugu', 'Asia') } as const;

const TETUM = { ...createLanguageProperties('Tetum', 'Asia') } as const;

const THAI = { ...createLanguageProperties('Thai', 'Asia') } as const;

const TIBETAN = { ...createLanguageProperties('Tibetan', 'Asia') } as const;

const TIGRINYA = { ...createLanguageProperties('Tigrinya', 'Africa') } as const;

const TONGAN = { ...createLanguageProperties('Tongan', 'Oceania') } as const;

const TSONGA = { ...createLanguageProperties('Tsonga', 'Africa') } as const;

const TSWANA = { ...createLanguageProperties('Tswana', 'Africa') } as const;

const TUMBUKA = { ...createLanguageProperties('Tumbuka', 'Africa') } as const;

const TURKISH = { ...createLanguageProperties('Turkish', 'Middle East') } as const;

const TURKMEN = { ...createLanguageProperties('Turkmen', 'Asia') } as const;

const TUVALU = { ...createLanguageProperties('Tuvalu', 'Oceania') } as const;

const TWI = { ...createLanguageProperties('Twi', 'Africa') } as const;

const UDMURT = { ...createLanguageProperties('Udmurt', 'Asia') } as const;

const UKRAINIAN = { ...createLanguageProperties('Ukrainian', 'Europe') } as const;

const URDU = {
  ...createLanguageProperties('Urdu', 'Asia'),
  orientation: RIGHT_TO_LEFT_TEXT_ORIENTATION,
} as const;

const UYGHUR = {
  ...createLanguageProperties('Uyghur', 'Asia'),
  orientation: RIGHT_TO_LEFT_TEXT_ORIENTATION,
} as const;

const UZBEK = { ...createLanguageProperties('Uzbek', 'Asia') } as const;

const VENDA = { ...createLanguageProperties('Venda', 'Africa') } as const;

const VENETIAN = { ...createLanguageProperties('Venetian', 'Europe') } as const;

const VIETNAMESE = { ...createLanguageProperties('Vietnamese', 'Asia') } as const;

const WARAY = { ...createLanguageProperties('Waray', 'Asia') } as const;

const WELSH = { ...createLanguageProperties('Welsh', 'Europe') } as const;

const WOLOF = { ...createLanguageProperties('Wolof', 'Africa') } as const;

const WU = { ...createLanguageProperties('Wu', 'Asia') } as const;

const XHOSA = { ...createLanguageProperties('Xhosa', 'Africa') } as const;

const XIANG = { ...createLanguageProperties('Xiang', 'Asia') } as const;

const YAKUT = { ...createLanguageProperties('Yakut', 'Asia') } as const;

const YIDDISH = {
  ...createLanguageProperties('Yiddish', 'Europe'),
  orientation: RIGHT_TO_LEFT_TEXT_ORIENTATION,
} as const;

const YORUBA = { ...createLanguageProperties('Yoruba', 'Africa') } as const;

const ZAPOTEC = { ...createLanguageProperties('Zapotec', 'North America') } as const;

const ZULU = { ...createLanguageProperties('Zulu', 'Africa') } as const;

const LANGUAGES = [
  ACEHNESE,
  AFRIKAANS,
  AKAN,
  ALBANIAN,
  AMHARIC,
  ARABIC,
  ARMENIAN,
  ASSAMESE,
  AWADHI,
  AYMARA,
  AZERBAIJANI,
  BALINESE,
  BAMBARA,
  BANJAR,
  BASHKIR,
  BASQUE,
  BATAK,
  BELARUSIAN,
  BEMBA,
  BENGALI,
  BHOJPURI,
  BIKOL,
  BOSNIAN,
  BRETON,
  BUGINESE,
  BULGARIAN,
  BURMESE,
  CANTONESE,
  CATALAN,
  CEBUANO,
  CHHATTISGARHI,
  CHINESE,
  CHITTAGONIAN,
  CHUVASH,
  CORSICAN,
  CREE,
  CROATIAN,
  CZECH,
  DANISH,
  DARI,
  DHOLUO,
  DUTCH,
  DZONGKHA,
  ENGLISH,
  ESPERANTO,
  ESTONIAN,
  EWE,
  FAROESE,
  FIJIAN,
  FINNISH,
  FILIPINO,
  FRENCH,
  FRISIAN,
  FULANI,
  GA,
  GALICIAN,
  GAN,
  GARHWALI,
  GEORGIAN,
  GERMAN,
  GONDI,
  GREEK,
  GUARANI,
  GUJARATI,
  HAKKA,
  HARYANVI,
  HAUSA,
  HAWAIIAN,
  HEBREW,
  HILIGAYNON,
  HINDI,
  HMONG,
  HUNGARIAN,
  ICELANDIC,
  IGBO,
  ILOCANO,
  INDONESIAN,
  INUKTITUT,
  IRISH,
  ITALIAN,
  JAPANESE,
  JAVANESE,
  KABYLE,
  KAMBA,
  KANNADA,
  KANURI,
  KAPAMPANGAN,
  KAREN,
  KASHMIRI,
  KASHUBIAN,
  KAZAKH,
  KHMER,
  KIKUYU,
  KINYARWANDA,
  KIRUNDI,
  KOMI,
  KONKANI,
  KOREAN,
  KURDISH,
  KYRGYZ,
  LAO,
  LATIN,
  LATVIAN,
  LIGURIAN,
  LIMBURGISH,
  LINGALA,
  LITHUANIAN,
  LOMBARD,
  LUGANDA,
  LUO,
  LUXEMBOURGISH,
  MACEDONIAN,
  MADURESE,
  MAITHILI,
  MAKASSAR,
  MALAGASY,
  MALAY,
  MALAYALAM,
  MALTESE,
  MANDARIN,
  MANIPURI,
  MAORI,
  MAPUDUNGUN,
  MARANAO,
  MARATHI,
  MARWARI,
  MAYA,
  MEITEI,
  MERU,
  MINANGKABAU,
  MIRANDESE,
  MIXTEC,
  MON,
  MONGOLIAN,
  MONTENEGRIN,
  MOSSI,
  NAHUATL,
  NAVAJO,
  NEPALI,
  NEWAR,
  NORWEGIAN,
  NYANJA,
  OCCITAN,
  ODIA,
  OJIBWE,
  OROMO,
  PANGASINAN,
  PASHTO,
  PERSIAN,
  POLISH,
  PORTUGUESE,
  PUNJABI,
  QUECHUA,
  RAJASTHANI,
  ROHINGYA,
  ROMANI,
  ROMANIAN,
  ROMANSH,
  RUSSIAN,
  SAMOAN,
  SANGO,
  SANSKRIT,
  SANTALI,
  SARDINIAN,
  SCOTS,
  SERBIAN,
  SESOTHO,
  SHAN,
  SHONA,
  SICILIAN,
  SILESIAN,
  SINDHI,
  SINHALA,
  SLOVAK,
  SLOVENIAN,
  SOMALI,
  SONINKE,
  SPANISH,
  SUNDANESE,
  SWAHILI,
  SWATI,
  SWEDISH,
  SYLHETI,
  TAGALOG,
  TAHITIAN,
  TAJIK,
  TAMIL,
  TATAR,
  TELUGU,
  TETUM,
  THAI,
  TIBETAN,
  TIGRINYA,
  TONGAN,
  TSONGA,
  TSWANA,
  TUMBUKA,
  TURKISH,
  TURKMEN,
  TUVALU,
  TWI,
  UDMURT,
  UKRAINIAN,
  URDU,
  UYGHUR,
  UZBEK,
  VENDA,
  VENETIAN,
  VIETNAMESE,
  WARAY,
  WELSH,
  WOLOF,
  WU,
  XHOSA,
  XIANG,
  YAKUT,
  YIDDISH,
  YORUBA,
  ZAPOTEC,
  ZULU,
] as const;

type Language = (typeof LANGUAGES)[number];

export type { Language, LanguageProperties };

export default {
  ACEHNESE,
  AFRIKAANS,
  AKAN,
  ALBANIAN,
  AMHARIC,
  ARABIC,
  ARMENIAN,
  ASSAMESE,
  AWADHI,
  AYMARA,
  AZERBAIJANI,
  BALINESE,
  BAMBARA,
  BANJAR,
  BASHKIR,
  BASQUE,
  BATAK,
  BELARUSIAN,
  BEMBA,
  BENGALI,
  BHOJPURI,
  BIKOL,
  BOSNIAN,
  BRETON,
  BUGINESE,
  BULGARIAN,
  BURMESE,
  CANTONESE,
  CATALAN,
  CEBUANO,
  CHHATTISGARHI,
  CHINESE,
  CHITTAGONIAN,
  CHUVASH,
  CORSICAN,
  CREE,
  CROATIAN,
  CZECH,
  DANISH,
  DARI,
  DHOLUO,
  DUTCH,
  DZONGKHA,
  ENGLISH,
  ESPERANTO,
  ESTONIAN,
  EWE,
  FAROESE,
  FIJIAN,
  FINNISH,
  FILIPINO,
  FRENCH,
  FRISIAN,
  FULANI,
  GA,
  GALICIAN,
  GAN,
  GARHWALI,
  GEORGIAN,
  GERMAN,
  GONDI,
  GREEK,
  GUARANI,
  GUJARATI,
  HAKKA,
  HARYANVI,
  HAUSA,
  HAWAIIAN,
  HEBREW,
  HILIGAYNON,
  HINDI,
  HMONG,
  HUNGARIAN,
  ICELANDIC,
  IGBO,
  ILOCANO,
  INDONESIAN,
  INUKTITUT,
  IRISH,
  ITALIAN,
  JAPANESE,
  JAVANESE,
  KABYLE,
  KAMBA,
  KANNADA,
  KANURI,
  KAPAMPANGAN,
  KAREN,
  KASHMIRI,
  KASHUBIAN,
  KAZAKH,
  KHMER,
  KIKUYU,
  KINYARWANDA,
  KIRUNDI,
  KOMI,
  KONKANI,
  KOREAN,
  KURDISH,
  KYRGYZ,
  LAO,
  LATIN,
  LATVIAN,
  LIGURIAN,
  LIMBURGISH,
  LINGALA,
  LITHUANIAN,
  LOMBARD,
  LUGANDA,
  LUO,
  LUXEMBOURGISH,
  MACEDONIAN,
  MADURESE,
  MAITHILI,
  MAKASSAR,
  MALAGASY,
  MALAY,
  MALAYALAM,
  MALTESE,
  MANDARIN,
  MANIPURI,
  MAORI,
  MAPUDUNGUN,
  MARANAO,
  MARATHI,
  MARWARI,
  MAYA,
  MEITEI,
  MERU,
  MINANGKABAU,
  MIRANDESE,
  MIXTEC,
  MON,
  MONGOLIAN,
  MONTENEGRIN,
  MOSSI,
  NAHUATL,
  NAVAJO,
  NEPALI,
  NEWAR,
  NORWEGIAN,
  NYANJA,
  OCCITAN,
  ODIA,
  OJIBWE,
  OROMO,
  PANGASINAN,
  PASHTO,
  PERSIAN,
  POLISH,
  PORTUGUESE,
  PUNJABI,
  QUECHUA,
  RAJASTHANI,
  ROHINGYA,
  ROMANI,
  ROMANIAN,
  ROMANSH,
  RUSSIAN,
  SAMOAN,
  SANGO,
  SANSKRIT,
  SANTALI,
  SARDINIAN,
  SCOTS,
  SERBIAN,
  SESOTHO,
  SHAN,
  SHONA,
  SICILIAN,
  SILESIAN,
  SINDHI,
  SINHALA,
  SLOVAK,
  SLOVENIAN,
  SOMALI,
  SONINKE,
  SPANISH,
  SUNDANESE,
  SWAHILI,
  SWATI,
  SWEDISH,
  SYLHETI,
  TAGALOG,
  TAHITIAN,
  TAJIK,
  TAMIL,
  TATAR,
  TELUGU,
  TETUM,
  THAI,
  TIBETAN,
  TIGRINYA,
  TONGAN,
  TSONGA,
  TSWANA,
  TUMBUKA,
  TURKISH,
  TURKMEN,
  TUVALU,
  TWI,
  UDMURT,
  UKRAINIAN,
  URDU,
  UYGHUR,
  UZBEK,
  VENDA,
  VENETIAN,
  VIETNAMESE,
  WARAY,
  WELSH,
  WOLOF,
  WU,
  XHOSA,
  XIANG,
  YAKUT,
  YIDDISH,
  YORUBA,
  ZAPOTEC,
  ZULU,
  LANGUAGES,
};
