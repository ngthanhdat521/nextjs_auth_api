import { IUser } from '@interfaces';
import { create } from 'zustand';

type State = {
  user?: IUser;
};

type Action = {
  setProfile: (user: IUser) => void;
};

// Create your store, which includes both state and (optionally) actions
export const useUserStore = create<State & Action>((set) => ({
  user: undefined,
  setProfile: (user) => set(() => ({ user })),
}));
