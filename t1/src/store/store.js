import create from 'zustand';
import { devtools } from 'zustand/middleware';
let store = (set) => ({
  isUser: false,
  loginUser: {},
  quickMenuTop: 0,
  setIsUser: () => set((state) => ({ isUser: !state.isUser })),
  setLoginUser: (user) => set((state) => ({ loginUser: user })),
  setQuickMenuTop: (y) => set((state) => ({ quickMenuTop: state.quickMenuTop + y })),
});

store = create(devtools(store));

export default store;
