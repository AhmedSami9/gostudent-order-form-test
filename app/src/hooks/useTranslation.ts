import type { LocaleCode } from "../types/order";
import { translations, type TranslationKey } from "../data/translations";

export function useTranslation(localeCode: LocaleCode) {
  const dictionary = translations[localeCode];

  function t(key: TranslationKey) {
    return dictionary[key];
  }

  return { t };
}
