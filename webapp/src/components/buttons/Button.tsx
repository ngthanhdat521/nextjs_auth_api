import { ButtonHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const Button: FC<ButtonHTMLAttributes<HTMLButtonElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <button
      className={twMerge(
        'text-white bg-indigo-700 hover:bg-indigo-800 focus:ring-4 focus:ring-indigo-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-indigo-600 dark:hover:bg-indigo-700 dark:focus:ring-indigo-800 disabled:bg-gray-200 disabled:text-gray-900',
        className
      )}
      {...rest}
    />
  );
};
