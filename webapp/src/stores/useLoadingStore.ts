import { create } from 'zustand';

type State = {
  loading: boolean;
};

type Action = {
  openLoading: () => void;
  closeLoading: () => void;
};

// Create your store, which includes both state and (optionally) actions
export const useLoadingStore = create<State & Action>((set) => ({
  loading: false,
  openLoading: () => set(() => ({ loading: true })),
  closeLoading: () => set(() => ({ loading: false })),
}));
