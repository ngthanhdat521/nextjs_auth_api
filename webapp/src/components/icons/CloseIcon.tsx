import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
}

export const CloseIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <svg
      className={twMerge('w-6 h-6 text-gray-800 dark:text-white', className)}
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
        d='M6 18 17.94 6M18 18 6.06 6'
      />
    </svg>
  );
};
