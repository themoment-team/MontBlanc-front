import { atom } from 'recoil';

export const HasAdminToken = atom<boolean>({
    key: "HasAdminToken",
    default: false,
})

export const StudentMode = atom<boolean>({
    key: "StudentMode",
    default: false,
})
