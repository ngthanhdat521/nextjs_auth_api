import { cn } from '@utils/Common';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const ErrorTooltip: FC<IProps> = (props) => {
  const { children, className } = props;

  return (
    <div
      role='tooltip'
      className={cn(
        'absolute bottom-12 left-1/2 -translate-x-1/2 z-10 text-[.625rem] font-medium text-white transition-opacity duration-300 bg-gray-900 rounded-lg shadow-sm tooltip dark:bg-gray-700',
        className
      )}
    >
      <div className='px-2 py-1 relative'>
        {children}
        <div
          className='tooltip-arrow absolute -bottom-1 bg-gray-900 left-1/2 -translate-x-1/2'
          data-popper-arrow
        />
      </div>
    </div>
  );
};
