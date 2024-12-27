'use client';
import { FC, Fragment, ReactNode } from 'react';

interface IProps {
  children: ReactNode;
}

export const UserProvider: FC<IProps> = (props) => {
  const { children } = props;

  return <Fragment>{children}</Fragment>;
};
