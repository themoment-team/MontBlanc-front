import { atom } from "recoil";

export const HasAdminToken = atom<boolean>({
  key: "HasAdminToken",
  default: false,
});

export const VisibleBannerState = atom<boolean>({
  key: "ShowBanner",
  default: true,
});
