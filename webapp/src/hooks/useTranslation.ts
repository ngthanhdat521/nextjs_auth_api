'use client'
import { useSearchParams } from 'next/navigation';
import vi from '../../messages/vi.json';
import en from '../../messages/en.json';
import ja from '../../messages/ja.json';

export const LANGS = {
  vi,
  en,
  ja,
};

export type Languages = keyof typeof LANGS;

export const useTranslation = () => {
  const params = useSearchParams();
  const lang: Languages = (params.get('lang') as Languages) || 'vi';
  return LANGS[lang];
};
