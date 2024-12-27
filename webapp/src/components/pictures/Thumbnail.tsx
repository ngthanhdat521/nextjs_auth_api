import { FC, ImgHTMLAttributes } from 'react';
import { twMerge } from 'tailwind-merge';
import { Picture } from '@components/pictures';

export const Thumbnail: FC<ImgHTMLAttributes<HTMLImageElement>> = (props) => {
  const { className, ...rest } = props;

  return (
    <Picture
      className={twMerge('w-[150px] h-[200px]', className)}
      {...rest}
    />
  );
};
