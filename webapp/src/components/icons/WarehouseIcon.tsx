import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { TbBuildingWarehouse } from 'react-icons/tb';

interface IProps {
  className?: string;
}

export const WarehouseIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <TbBuildingWarehouse
      className={twMerge(
        'w-[24px] h-[24px] text-gray-800 dark:text-white',
        className
      )}
    />
  );
};
