import { DefaultValue, useRecoilState } from 'recoil';
import { localStorageState } from '../recoil/atom/atom';

export const useLocalStorage = () => {
  const [value, setValue] = useRecoilState(localStorageState);
  console.log(value);

  const removeValue = () => {
    setValue(new DefaultValue());
  };

  return { value, setValue, removeValue };
};
