import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { TbLogout } from 'react-icons/tb';

interface IProps {
  className?: string;
}

export const LogoutIcon: FC<IProps> = (props) => {
  const { className } = props;

  return (
    <TbLogout className={twMerge('text-gray-800 dark:text-white w-6 h-6', className)} />
  );
};
