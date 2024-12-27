import { FC } from 'react';
import { MdOutlineCategory } from 'react-icons/md';
import { twMerge } from 'tailwind-merge';

interface IProps {
  className?: string;
}

export const CategoryIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <MdOutlineCategory
      className={twMerge('text-gray-800 dark:text-white', className)}
    />
  );
};
