import { FC } from 'react';
import { Link } from '@components/links';
import { twMerge } from 'tailwind-merge';

interface IProps {
  href: string;
  children: string;
  className?: string;
}

export const ButtonLink: FC<IProps> = (props) => {
  const { children, href, className } = props;

  return (
    <Link
      className={twMerge(
        'text-sm font-medium text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-900 p-2 rounded-md border border-gray-300',
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
