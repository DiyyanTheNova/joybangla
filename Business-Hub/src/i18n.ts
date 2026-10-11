import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';

const locales = ['en', 'bn'];

export default getRequestConfig(async ({ locale }) => {
  // Ensure locale is always a string, default to 'en' if undefined
  const currentLocale = locale || 'en';
  
  // Validate that the incoming `locale` parameter is valid
  if (!locales.includes(currentLocale)) notFound();

  return {
    messages: (await import(`./messages/${currentLocale}.json`)).default,
    locale: currentLocale
  };
});