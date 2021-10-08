import { atom } from "recoil";

export const HasAdminToken = atom<boolean>({
  key: "HasAdminToken",
  default: false,
});
