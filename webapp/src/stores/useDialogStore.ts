import { ICommonDialogProps } from '@components/dialogs';
import { IConfirmationDialogProps } from '@components/dialogs/ConfirmationDialog';
import { INotificationDialogProps } from '@components/dialogs/NotificationDialog';
import { create } from 'zustand';

type State = {
  confirmation?: IConfirmationDialogProps;
  notification?: INotificationDialogProps;
  common?: ICommonDialogProps;
};

type Action = {
  openConfirmationDialog: (confirmation: IConfirmationDialogProps) => void;
  closeConfirmationDialog: () => void;
  openNotificationDialog: (notification: INotificationDialogProps) => void;
  closeNotificationDialog: () => void;
  openCommonDialog: (common: ICommonDialogProps) => void;
  closeCommonDialog: () => void;
};

// Create your store, which includes both state and (optionally) actions
export const useDialogStore = create<State & Action>((set) => ({
  confirmation: undefined,
  openConfirmationDialog: (confirmation) => set(() => ({ confirmation })),
  closeConfirmationDialog: () => set(() => ({ confirmation: undefined })),
  notification: undefined,
  openNotificationDialog: (notification) => set(() => ({ notification })),
  closeNotificationDialog: () => set(() => ({ notification: undefined })),
  common: undefined,
  openCommonDialog: (common) => set(() => ({ common })),
  closeCommonDialog: () => set(() => ({ common: undefined })),
}));
