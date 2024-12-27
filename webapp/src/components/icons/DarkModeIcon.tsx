import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
}

export const DarkModeIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <svg
      className={twMerge('w-6 h-6 text-gray-800 dark:text-white', className)}
      aria-hidden='true'
      xmlns='http://www.w3.org/2000/svg'
      width='24'
      height='24'
      fill='currentColor'
      viewBox='0 0 20 20'
    >
      <path d='M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z'></path>
    </svg>
  );
};
