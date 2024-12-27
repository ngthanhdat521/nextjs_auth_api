import { MasterPage } from '@components/templates';
import { UserProvider as Auth0Provider } from '@auth0/nextjs-auth0/client';
import { NextIntlClientProvider } from 'next-intl';
import {
  getMessages,
  getTranslations,
  unstable_setRequestLocale,
} from 'next-intl/server';

import type { Metadata } from 'next';
import '../globals.css';
import { ReactNode } from 'react';
import { routing } from '@i18n/routing';

type Props = {
  children: ReactNode;
  params: { locale: string };
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params: { locale },
}: Omit<Props, 'children'>) {
  // const t = await getTranslations({ locale, namespace: 'LocaleLayout' });

  return {
    title: 'Personal',
  };
}

export default async function LocaleLayout(props: Props) {
  const {
    children,
    params: { locale },
  } = props;
  unstable_setRequestLocale(locale);

  const messages = await getMessages();

  return (
    <html lang='vi'>
      <head>
        {/* <meta name='viewport' content='width=1920' /> */}
        {/* <meta name="viewport" content="width=device-width, initial-scale=1.0" /> */}
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link
          href='https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap'
          rel='stylesheet'
        />
        <link
          href='https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.css'
          rel='stylesheet'
        />
        <script src='https://cdn.jsdelivr.net/npm/flowbite@2.5.2/dist/flowbite.min.js'></script>
      </head>

      <body>
        <NextIntlClientProvider messages={messages}>
          <Auth0Provider>
            <MasterPage>{children}</MasterPage>
          </Auth0Provider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
