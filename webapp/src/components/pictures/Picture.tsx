import { FC, ImgHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';

export const Picture: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { className, ...rest } = props;
  return (
    <img
      className={twMerge('h-auto max-w-lg rounded-lg', className)}
      {...rest}
    />
  );
};
