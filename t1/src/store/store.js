import create from 'zustand';
import { devtools } from 'zustand/middleware';
let store = (set) => ({
  isUser: false,
  loginUser: {},
  quickMenuTop: 0,
  isPathname: '',
  isTypename: '',
  isPageY: '',
  isAgreePrivacy: false,
  setIsUser: () => set((state) => ({ isUser: !state.isUser })),
  setLoginUser: (user) => set((state) => ({ loginUser: user })),
  setQuickMenuTop: (y) => set((state) => ({ quickMenuTop: state.quickMenuTop + y })),
  setPathName: (pathname) => set((state) => ({ isPathname: pathname })),
  setTypename: (typename) => set((state) => ({ isTypename: typename })),
  setPageY: (pageY) => set((state) => ({ isPageY: pageY })),
  setAgreePrivacy: (bool) => set((state) => ({ isAgreePrivacy: bool })),
});

store = create(devtools(store));

export default store;
