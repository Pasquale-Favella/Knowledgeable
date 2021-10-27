import { atom } from 'jotai';

export const searchTermAtom = atom('');
export const searchTermSuggestAtom = atom('');
export const isThemeDarkAtom = atom(true);
export const modalAtom = atom(false);

export const modalContentAtom = atom( {} );