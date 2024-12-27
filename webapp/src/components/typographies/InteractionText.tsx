import { HTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const InteractionText: FC<HTMLAttributes<HTMLSpanElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <span className={twMerge('text-sm font-semibold ml-2 text-gray-400 dark:text-gray-400', className)} {...rest} />
  );
};
