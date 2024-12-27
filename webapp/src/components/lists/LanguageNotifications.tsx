'use client';
import React, { FC } from 'react';
import { Notifications } from '@components/lists';
import { OutlinedButton } from '@components/buttons';
import { cn } from '@utils/Common';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';

const LANGUAGES = [
  {
    id: 'en',
    title: 'English',
  },
  {
    id: 'vi',
    title: 'Vietnam',
  },
  {
    id: 'ja',
    title: 'Japan',
  },
];

export const LanguageNotifications: FC = () => {
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const changeLang = (lang: string) => {
    const route = pathname.split('/');
    console.log('route', route);
    router.push(`/${lang}/${route[2]}`);
  };

  return (
    <Notifications title='Languagues' className='w-[300px]'>
      <div className=''>
        {LANGUAGES.map((lang, index) => (
          <OutlinedButton
            key={index}
            className={cn('w-full rounded-none px-10 py-3', {
              'bg-gray-100': searchParams.get('lang') === lang.id,
            })}
            onClick={() => changeLang(lang.id)}
          >
            <span className='text-sm font-semibold text-gray-500'>
              {lang.title}
            </span>
          </OutlinedButton>
        ))}
      </div>
    </Notifications>
  );
};
