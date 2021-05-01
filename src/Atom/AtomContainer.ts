import { atom } from 'recoil';

export const AccessToken = atom<string | null>({
    key: "AdminToken",
    default: "",
})

export const RefreshToken = atom<string | null>({
    key: "RefreshToken",
    default: "",
})
