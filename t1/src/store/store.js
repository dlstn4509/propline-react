import create from 'zustand';
import { devtools } from 'zustand/middleware';
let store = (set) => ({
  isUser: false,
  quickMenuTop: 0,
  isAuth: () => set((state) => ({ isUser: !state.isUser })),
  setQuickMenuTop: (y) => set((state) => ({ quickMenuTop: state.quickMenuTop + y })),
});

store = create(devtools(store));

export default store;
