import { cn } from '@utils/Common';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  title: string;
  toolbar?: ReactNode;
  className?: string;
}

/**
 * Page Layout
 * @param props
 * @returns
 */
export const PageLayout: FC<IProps> = (props) => {
  const { children, title, toolbar, className } = props;

  return (
    <div className={cn('py-10 min-h-[calc(100vh-205px)] box-border', className)}>
      <div className='flex border-b border-gray-200 dark:!border-gray-500 mb-10 pb-3 justify-between'>
        <div>
          <h2 className='text-2xl font-bold leading-7 text-gray-900 dark: sm:truncate sm:text-3xl sm:tracking-tight dark:text-gray-400'>
            {title}
          </h2>
        </div>
        <div className='flex'>{toolbar}</div>
      </div>
      {children}
    </div>
  );
};
