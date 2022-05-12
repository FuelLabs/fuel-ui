import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomFamily, selectAtom } from 'jotai/utils';
import { useEffect } from 'react';

export type InputSizes = 'sm' | 'md' | 'lg';

export type InputStateProps = {
  size?: InputSizes;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

type InputState = Record<string, InputStateProps>;

export const inputsAtom = atom<InputState>({});
export const inputsFamily = atomFamily((id?: string) =>
  atom(
    (get) => id && get(inputsAtom)[id],
    (get, set, arg: Partial<InputStateProps>) => {
      if (!id) return null;
      const prev = get(inputsAtom);
      const newInputs = { ...prev, [id]: { ...prev[id], ...arg } };
      set(inputsAtom, newInputs);
      return newInputs;
    }
  )
);

export function useSetInputState(id: string, props: InputStateProps) {
  const setState = useSetAtom(inputsAtom);
  useEffect(() => {
    setState((inputs) => ({ ...inputs, [id]: props }));
  }, [id, props.isDisabled, props.isInvalid, props.isReadOnly, props.isRequired]);
}

const inputAtom = atomFamily((id?: string) =>
  selectAtom(inputsAtom, (inputs) => (id ? inputs[id] : null))
);

export function useInputState(id?: string) {
  return useAtomValue(inputAtom(id));
}
