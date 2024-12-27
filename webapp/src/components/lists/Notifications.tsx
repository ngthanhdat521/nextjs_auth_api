import React, { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  title: string;
  children: ReactNode;
  className?: string;
}

export const Notifications: FC<IProps> = (props) => {
  const { title, children, className } = props;

  return (
    <div
      className={twMerge('overflow-hidden text-base list-none bg-white divide-y divide-gray-100 rounded shadow-lg dark:divide-gray-600 dark:bg-gray-700 block', className)}
      data-popper-placement='bottom'
    >
      <div className='block px-4 py-2 text-base font-medium text-center text-gray-700 bg-gray-50 dark:bg-gray-700 dark:text-gray-400'>
        {title}
      </div>
      <div>{children}</div>
    </div>
  );
};
