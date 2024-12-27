import { FC, ReactNode } from 'react';
import { Footer, Header } from '@components/templates';
import { DialogProvider, LoadingProvider, UserProvider } from '@providers';
import { ErrorBoundary } from '@providers/ErrorBoundary';

interface IProps {
  children: ReactNode;
}

export const MasterPage: FC<IProps> = (props) => {
  const { children } = props;

  return (
    <ErrorBoundary>
      <DialogProvider>
        <LoadingProvider>
          <Header />
          <main className='pt-[71px] xl:px-56 md:px-20 sm:px-12 xs:px-3 bg-gray-50 dark:bg-gray-900'>
            <UserProvider>{children}</UserProvider>
          </main>
          <Footer />
        </LoadingProvider>
      </DialogProvider>
    </ErrorBoundary>
  );
};
