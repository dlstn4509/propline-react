import create from 'zustand';
import { devtools } from 'zustand/middleware';
import axios from 'axios';

let store = (set) => ({
  isUser: false,
  loginUser: {},
  isPathname: '',
  isTypename: '',
  isPageY: '',
  isAgreePrivacy: false,
  isBanner: [],
  isMapType: 'block',
  setIsUser: () => set((state) => ({ isUser: !state.isUser })),
  setLoginUser: (user) => set((state) => ({ loginUser: user })),
  setPathName: (pathname) => set((state) => ({ isPathname: pathname })),
  setTypename: (typename) => set((state) => ({ isTypename: typename })),
  setPageY: (pageY) => set((state) => ({ isPageY: pageY })),
  setAgreePrivacy: (bool) => set((state) => ({ isAgreePrivacy: bool })),
  setBanner: async () => {
    const { data } = await axios.get(`https://t1.propline.co.kr/api/banner`);
    set((state) => ({ isBanner: data }));
  },
  setMapType: (mapType) => set((state) => ({ isMapType: mapType })),
});

store = create(devtools(store));

export default store;
