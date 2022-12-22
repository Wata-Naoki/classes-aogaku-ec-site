import { atom, DefaultValue } from 'recoil';
import { localStorageEffect } from '../localStorageEffect/localStorageEffect';

export const searchFormState = atom({
  key: 'SearchFormAtom',
  default: '',
});

export const cartState = atom({
  key: 'CartAtom',
  default: [{ id: '', title: '', price: 0, image: '' }],
});

export const isDrawerOpenState = atom({
  key: 'isDrawerOpenStates', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const pageState = atom({
  key: 'todoListState',
  default: 0,
});

export const localStorageState = atom<any | DefaultValue>({
  key: 'key',
  default: [{ id: '', title: '', price: 0, image: '' }],
  effects_UNSTABLE: [localStorageEffect('localStorage_key')],
});
