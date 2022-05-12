import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomFamily, selectAtom } from 'jotai/utils';
import { useEffect } from 'react';

type StateProps = {
  isRequired?: boolean;
  isInvalid?: boolean;
  isDisabled?: boolean;
  isReadOnly?: boolean;
};

type FormControlState = Record<string, StateProps>;
export const formControlsAtom = atom<FormControlState>({});

export function useSetFormControlProps(id: string, props: StateProps) {
  const setState = useSetAtom(formControlsAtom);
  useEffect(() => {
    setState((formControls) => ({ ...formControls, [id]: props }));
  }, [id, props.isDisabled, props.isInvalid, props.isReadOnly, props.isRequired]);
}

const formControlAtom = atomFamily((id?: string) =>
  selectAtom(formControlsAtom, (formControls) => (id ? formControls[id] : null))
);

export function useFormControlProps(id?: string) {
  return useAtomValue(formControlAtom(id));
}
