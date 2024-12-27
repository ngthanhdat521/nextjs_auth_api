import { FC, ReactNode } from 'react';
import { Link } from '@components/links';
import { cn } from '@utils/Common';

interface IProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const MenuLink: FC<IProps> = (props) => {
  const { children, href, className } = props;

  return (
    <Link
      className={cn(
        'flex justify-center text-sm font-semibold text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-900 p-2 rounded-md',
        className
      )}
      href={href}
    >
      {children}
    </Link>
  );
};
