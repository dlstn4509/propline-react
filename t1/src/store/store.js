import create from 'zustand';
import { devtools } from 'zustand/middleware';
import axios from 'axios';

let store = (set) => ({
  isUser: false,
  loginUser: {},
  quickMenuTop: 0,
  isPathname: '',
  isTypename: '',
  isPageY: '',
  isQuickMenuY: 3,
  isAgreePrivacy: false,
  isBanner: [],
  setIsUser: () => set((state) => ({ isUser: !state.isUser })),
  setLoginUser: (user) => set((state) => ({ loginUser: user })),
  setQuickMenuTop: (y) => set((state) => ({ quickMenuTop: state.quickMenuTop + y })),
  setPathName: (pathname) => set((state) => ({ isPathname: pathname })),
  setTypename: (typename) => set((state) => ({ isTypename: typename })),
  setPageY: (pageY) => set((state) => ({ isPageY: pageY })),
  setQuickMenuY: (num) =>
    set((state) => ({ isQuickMenuY: state.isQuickMenuY >= 0 ? state.isQuickMenuY + num : 3 })),
  setAgreePrivacy: (bool) => set((state) => ({ isAgreePrivacy: bool })),
  setBanner: async () => {
    const { data } = await axios.get(`https://t1.propline.co.kr/api/banner`);
    set((state) => ({ isBanner: data }));
  },
  // setBanner: () => set((state) => ({ isBanner: state.isBanner })),/
});

store = create(devtools(store));

export default store;
