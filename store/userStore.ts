import { UserDraft } from '@/type';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface UserStore {
  draft: UserDraft;
  setUserDraft: (value: UserDraft) => void;
  clearUserDraft: () => void;
}

const initialUser: UserDraft = {
  name: '',
  email: '',
};

export const useUserStore = create<UserStore>()(
  persist(
    set => {
      return {
        draft: initialUser,
        setUserDraft: value => set({ draft: value }),
        clearUserDraft: () => set({ draft: initialUser }),
      };
    },
    { name: 'userDraft', partialize: state => ({ draft: state.draft }) },
  ),
);
