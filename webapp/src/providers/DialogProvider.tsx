'use client';
import { FC, Fragment, ReactNode } from 'react';
import {
  ConfirmationDialog,
  NotificationDialog,
  CommonDialog,
} from '@components/dialogs';
import { useDialogStore } from '@stores';

interface IProps {
  children: ReactNode;
}

export const DialogProvider: FC<IProps> = (props) => {
  const { children } = props;
  const {
    confirmation,
    closeConfirmationDialog,
    notification,
    closeNotificationDialog,
    common,
    closeCommonDialog,
  } = useDialogStore();

  return (
    <Fragment>
      {children}
      {confirmation && (
        <ConfirmationDialog
          content={confirmation.content}
          params={confirmation.params}
          onConfirm={confirmation.onConfirm}
          onCancel={closeConfirmationDialog}
        />
      )}
      {notification && (
        <NotificationDialog
          content={notification.content}
          params={notification.params}
          onConfirm={() => {
            notification.onConfirm && notification.onConfirm();
            closeNotificationDialog();
          }}
        />
      )}
      {common && (
        <CommonDialog
          content={common.content}
          confirm={common.confirm}
          onConfirm={() => {
            common.onConfirm && common.onConfirm();
            closeCommonDialog();
          }}
          onCancel={closeCommonDialog}
        />
      )}
    </Fragment>
  );
};
