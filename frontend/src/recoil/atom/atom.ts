import { atom, DefaultValue } from 'recoil';
import { CartType } from '../../types/types';
import { localStorageEffect } from '../localStorageEffect/localStorageEffect';

export const isDrawerOpenState = atom({
  key: 'isDrawerOpenStates', // unique ID (with respect to other atoms/selectors)
  default: false, // default value (aka initial value)
});

export const localStorageCartState = atom<any | DefaultValue>({
  key: 'cartStateKey',
  default: [{ id: '', title: '', price: 0, image: '' }],
  effects_UNSTABLE: [localStorageEffect('localStorage_key')],
});
