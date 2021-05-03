import { atom } from 'recoil';

export const HasAdminToken = atom<boolean>({
    key: "HasAdminToken",
    default: false,
})

export const StudentState = atom<boolean>({
    key: "StudentState",
    default: false,
})
