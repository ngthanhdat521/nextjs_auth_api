import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const Overlay: FC<IProps> = (props) => {
  const { children } = props;

  return (
    <div className='fixed z-30'>
      <div className='fixed inset-0 bg-gray-500 dark:bg-gray-700 !bg-opacity-50 transition-opacity' />
      <div className='fixed inset-0 z-10 w-screen overflow-y-auto'>
        {children}
      </div>z
    </div>
  );
};
