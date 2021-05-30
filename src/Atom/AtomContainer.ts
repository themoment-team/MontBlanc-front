import { atom } from 'recoil';
import { Modal } from "../Context/Modal";

export const HasAdminToken = atom<boolean>({
    key: "HasAdminToken",
    default: false,
});

export const OpenedModal = atom<Modal | null>({
    key: "OpenedModal",
    default: null,
})
