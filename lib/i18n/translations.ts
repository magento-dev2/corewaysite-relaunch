import { Locale } from './config';

export async function getTranslations(locale: Locale, namespace: string) {
  try {
    const translations = await import(`@/locales/${locale}/${namespace}.json`);
    return translations.default;
  } catch (error) {
    console.error(`Failed to load translations for ${locale}/${namespace}`, error);
    return {};
  }
}
