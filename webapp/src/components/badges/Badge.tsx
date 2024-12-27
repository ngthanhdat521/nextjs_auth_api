import { FC, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
  content: number;
}

export const Badge: FC<IProps> = (props) => {
  const { children, content } = props;

  return (
    <div className='relative inline-flex items-center'>
      {children}
      <div className='absolute flex items-center justify-center w-[1.1rem] h-[1.1rem] text-[0.6rem] font-bold text-white bg-red-500 rounded-full top-0 right-0'>
        {content}
      </div>
    </div>
  );
};
