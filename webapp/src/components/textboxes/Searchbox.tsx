import { InputHTMLAttributes, FC } from 'react';
import { Textbox } from '@components/textboxes';
import { IconButton } from '../buttons';
import { cn } from '@utils/Common';
import { useTranslations } from 'next-intl';

export const Searchbox: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const t = useTranslations("common");

  return (
    <div className='relative border border-gray-300 dark:border-gray-600 rounded-lg'>
      <IconButton className='border-none !rounded-none !rounded-r-md w-[38px] h-full absolute right-0 top-0 z-10 bg-gray-200'>
        <svg
          aria-hidden='true'
          className='w-5 h-5 text-gray-500 dark:text-gray-400'
          fill='currentColor'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            fillRule='evenodd'
            d='M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z'
            clipRule='evenodd'
          />
        </svg>
      </IconButton>
      <Textbox
        type='text'
        placeholder={t('search')}
        {...props}
        className={cn('!border-0', props.className)}
      />
    </div>
  );
};
