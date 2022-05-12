import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomFamily, selectAtom } from 'jotai/utils';
import { useEffect } from 'react';

export type InputSizes = 'sm' | 'md' | 'lg';

type StateProps = {
  size?: InputSizes;
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

type InputState = Record<string, StateProps>;
export const inputsAtom = atom<InputState>({});

export function useSetInputProps(id: string, props: StateProps) {
  const setState = useSetAtom(inputsAtom);
  useEffect(() => {
    setState((inputs) => ({ ...inputs, [id]: props }));
  }, [id, props.isDisabled, props.isInvalid, props.isReadOnly, props.isRequired]);
}

const inputAtom = atomFamily((id?: string) =>
  selectAtom(inputsAtom, (inputs) => (id ? inputs[id] : null))
);

export function useInputProps(id?: string) {
  return useAtomValue(inputAtom(id));
}
