import { ButtonHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const IconButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (
  props
) => {
  const { className, ...rest } = props;

  return (
    <button
      className={twMerge(
        'flex items-center justify-center p-2 text-sm font-medium text-center text-gray-900 bg-white rounded-lg hover:bg-gray-100 focus:bg-gray-100 dark:focus:bg-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700 disabled:bg-gray-200 disabled:text-gray-900',
        className
      )}
      {...rest}
    />
  );
};
