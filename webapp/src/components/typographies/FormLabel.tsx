import { cn } from '@utils/Common';
import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  className?: string;
}

export const FormLabel: FC<IProps> = (props) => {
  const { children, className } = props;

  return (
    <label
      className={cn(
        'block text-sm font-medium text-gray-900 dark:text-white',
        className
      )}
    >
      {children}
    </label>
  );
};
