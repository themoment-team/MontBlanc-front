import { atom } from 'recoil';

export const HasAdminToken = atom<boolean>({
    key: "AdminToken",
    default: false,
})
