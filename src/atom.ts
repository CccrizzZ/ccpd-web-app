import { atom } from 'jotai';

// show spinner to prevent mouse
export let showLoadSpinner = atom<boolean>(false);