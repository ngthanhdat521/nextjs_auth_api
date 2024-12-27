import { ImgHTMLAttributes, FC } from 'react';
import { twMerge } from 'tailwind-merge';

export const Avatar: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <img className={twMerge('w-8 h-8 rounded-full', className)} {...rest} />
  );
};
