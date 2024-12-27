import { FC } from 'react';
import { ProductItem } from '@common-types/Product';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import { CategoryIcon } from '@components/icons';
import { StarRating } from '@components/lists';

interface IProps {
  product: ProductItem;
}

export const ProductCard: FC<IProps> = (props) => {
  const { product } = props;

  const t = useTranslations('common');

  return (
    <div className='rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800'>
      <div className='flex w-full h-[400px]'>
        <a className='m-auto' href='#'>
          <img
            width={400}
            height={400}
            src={product.pictures[0]}
            alt='Sample'
          />
        </a>
      </div>
      <div className='pt-6'>
        <div className='mb-4 flex items-center justify-between gap-4'>
          <span className='me-2 rounded bg-indigo-100 px-2.5 py-0.5 text-xs font-medium text-indigo-800 dark:bg-indigo-900 dark:text-indigo-300'>
            {t('upToPriceOff', { discount: product.discount })}
          </span>
          <div className='flex items-center justify-end gap-1'>
            <button
              type='button'
              className='rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <svg
                className='h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                width={24}
                height={24}
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeWidth={2}
                  d='M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z'
                />
                <path
                  stroke='currentColor'
                  strokeWidth={2}
                  d='M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z'
                />
              </svg>
            </button>
            <button
              type='button'
              data-tooltip-target='tooltip-add-to-favorites'
              className='rounded-lg p-2 text-gray-500 hover:bg-gray-100 hover:text-gray-900 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white'
            >
              <svg
                className='h-5 w-5'
                aria-hidden='true'
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
              >
                <path
                  stroke='currentColor'
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z'
                />
              </svg>
            </button>
          </div>
        </div>
        <a
          href='#'
          className='text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white'
        >
          {product.title}
        </a>
        <div className='mt-2 flex items-center gap-2'>
          <StarRating score={product.favoriteScore} />
          <p className='text-sm font-medium text-gray-900 dark:text-white'>
            {Math.floor(product.favoriteScore)}
          </p>
          <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
            (455)
          </p>
        </div>
        <ul className='mt-2 flex items-center gap-4'>
          <li className='flex items-center gap-2'>
            <svg
              className='h-4 w-4 text-gray-500 dark:text-gray-400'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M13 7h6l2 4m-8-4v8m0-8V6a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v9h2m8 0H9m4 0h2m4 0h2v-4m0 0h-5m3.5 5.5a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Zm-10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0Z'
              />
            </svg>
            <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
              {t('fastDelivery')}
            </p>
          </li>
          <li className='flex items-center gap-2'>
            <CategoryIcon className='h-4 w-4 text-gray-500 dark:text-gray-400' />
            <p className='text-sm font-medium text-gray-500 dark:text-gray-400'>
              {t(product.category)}
            </p>
          </li>
        </ul>
        <div className='mt-4 flex items-center justify-between gap-4'>
          <p className='text-2xl font-extrabold leading-tight text-gray-900 dark:text-white'>
            {product.price.toLocaleString('en-US')} VND
          </p>
          <button
            type='button'
            className='inline-flex items-center rounded-lg bg-indigo-700 px-5 py-2.5 text-sm font-medium text-white hover:bg-indigo-800 focus:outline-none focus:ring-4  focus:ring-indigo-300 dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800'
          >
            <svg
              className='-ms-2 me-2 h-5 w-5'
              aria-hidden='true'
              xmlns='http://www.w3.org/2000/svg'
              width={24}
              height={24}
              fill='none'
              viewBox='0 0 24 24'
            >
              <path
                stroke='currentColor'
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M4 4h1.5L8 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm.75-3H7.5M11 7H6.312M17 4v6m-3-3h6'
              />
            </svg>
            {t('addToCart')}
          </button>
        </div>
      </div>
    </div>
  );
};
