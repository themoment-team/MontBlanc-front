import { atom } from "recoil";

const showBanner = (): boolean => {
  const storage = localStorage.getItem("the-moment-banner");
  if (!storage) return true;
  const bannerDate = new Date(`${storage}`);
  const date = new Date();
  return bannerDate < date;
};

export const ShowBanner = atom<boolean>({
  key: "ShowBanner",
  default: showBanner(),
});
