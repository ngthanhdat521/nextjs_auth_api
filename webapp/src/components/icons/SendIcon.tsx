import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { IoSend } from 'react-icons/io5';

interface IProps {
  className?: string;
}

export const SendIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <IoSend className={twMerge('w-[24px] h-[24px] text-gray-800 dark:text-white', className)} />
  );
};
