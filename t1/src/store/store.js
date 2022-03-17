import create from 'zustand';
import { devtools } from 'zustand/middleware';
let store = (set) => ({
  isUser: false,
  isAuth: () => set((state) => ({ isUser: !state.isUser })),
});

store = create(devtools(store));

export default store;
