import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
}

export const PlusIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <svg
      className={twMerge('text-gray-800 dark:text-white', className)}
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
      aria-hidden='true'
    >
      <path
        clipRule='evenodd'
        fillRule='evenodd'
        d='M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z'
      />
    </svg>
  );
};
