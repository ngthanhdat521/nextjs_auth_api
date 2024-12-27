import { FC, ReactNode } from 'react';
import { twMerge } from 'tailwind-merge';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const PageBody: FC<IProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      className={twMerge(
        'rounded-xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-600',
        className
      )}
    >
      <section className=''>{children}</section>
    </div>
  );
};
