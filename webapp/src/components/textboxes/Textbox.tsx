import { InputHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const Textbox: FC<InputHTMLAttributes<HTMLInputElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <input
      style={{ boxShadow: 'none' }}
      className={twMerge(
        'bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  focus:border-indigo-500 block w-full pl-3 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-indigo-500 shadow-none',
        className
      )}
      {...rest}
    />
  );
};
