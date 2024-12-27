import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { TbShoppingBagSearch } from 'react-icons/tb';

interface IProps {
  className?: string;
}

export const ShoppingBagIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <TbShoppingBagSearch
      className={twMerge('text-gray-800 dark:text-white w-6 h-6', className)}
    />
  );
};
