import { selector } from 'recoil';
import { nameState } from '../atoms/name';

export const nameLength = selector({
  key: 'nameLength',
  get: ({ get }) => {
    const name = get(nameState);
    const lengthOfName = name.length;
    return lengthOfName;
  },
});
