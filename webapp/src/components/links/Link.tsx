'use client'
import { cn } from '@utils/Common';
import NextLink from 'next/link';
import { usePathname } from 'next/navigation';
import { FC, ReactNode } from 'react';

interface IProps {
  href: string;
  children: ReactNode;
  className?: string;
}

export const Link: FC<IProps> = (props) => {
  const { children, href, className } = props;
  const pathname = usePathname();
  const actived = pathname.replace('/', '') === href;

  return (
    <NextLink
      className={cn(className, {
        'bg-gray-100 dark:bg-gray-900': actived,
      })}
      href={href}
    >
      {children}
    </NextLink>
  );
};
