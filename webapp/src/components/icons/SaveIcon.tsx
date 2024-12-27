import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { BiSave } from 'react-icons/bi';

interface IProps {
  className?: string;
}

export const SaveIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <BiSave className={twMerge('text-gray-800 dark:text-white', className)} />
  );
};
