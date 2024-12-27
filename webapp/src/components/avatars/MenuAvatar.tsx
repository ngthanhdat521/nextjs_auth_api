import { FC } from 'react';
import { twMerge } from 'tailwind-merge';
import { Avatar } from '@components/avatars';

interface IProps {
  src?: string;
  className?: string;
}

export const MenuAvatar: FC<IProps> = (props) => {
  const { className, src } = props;

  return (
    <Avatar className={twMerge('', className)} src={src} alt='user photo' />
  );
};
