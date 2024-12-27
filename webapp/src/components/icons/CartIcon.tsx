import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
}

export const CartIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <svg
      className={twMerge('text-gray-800 dark:text-white', className)}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='none'
      viewBox='0 0 24 24'
    >
      <path
        stroke='currentColor'
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth='2'
        d='M5 4h1.5L9 16m0 0h8m-8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm8 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-8.5-3h9.25L19 7H7.312'
      />
    </svg>
  );
};
