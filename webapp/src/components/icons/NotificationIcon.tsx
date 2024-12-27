import { FC } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
}

export const NotificationIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <svg
      className={twMerge('w-6 h-6 text-gray-800 dark:text-white', className)}
      fill='currentColor'
      viewBox='0 0 20 20'
      xmlns='http://www.w3.org/2000/svg'
    >
      <path d='M10 2a6 6 0 00-6 6v3.586l-.707.707A1 1 0 004 14h12a1 1 0 00.707-1.707L16 11.586V8a6 6 0 00-6-6zM10 18a3 3 0 01-3-3h6a3 3 0 01-3 3z' />
    </svg>
  );
};
