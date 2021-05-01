import { atom } from 'recoil';

export const AdminToken = atom<boolean>({
    key: "AdminToken",
    default: false,
})
