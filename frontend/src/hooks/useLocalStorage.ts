import { DefaultValue, useRecoilState } from 'recoil';
import { localStorageCartState } from '../recoil/atom/atom';

export const useLocalStorage = () => {
  const [value, setValue] = useRecoilState(localStorageCartState);
  console.log(value);

  const removeValue = () => {
    setValue(new DefaultValue());
  };

  return { value, setValue, removeValue };
};
