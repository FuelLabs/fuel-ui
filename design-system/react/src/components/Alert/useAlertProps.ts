import { atom, useAtomValue, useSetAtom } from 'jotai';
import { atomFamily, selectAtom } from 'jotai/utils';
import { useEffect } from 'react';

export type AlertStatus = 'info' | 'warning' | 'success' | 'error';

type StateProps = {
  status?: AlertStatus;
};

type AlertState = Record<string, StateProps>;
export const alertsAtom = atom<AlertState>({});

export function useSetAlertProps(id: string, props: StateProps) {
  const setState = useSetAtom(alertsAtom);
  useEffect(() => {
    setState((alerts) => ({ ...alerts, [id]: props }));
  }, [id, props.status]);
}

const alertAtom = atomFamily((id?: string) =>
  selectAtom(alertsAtom, (alerts) => (id ? alerts[id] : null))
);

export function useAlertProps(id?: string) {
  return useAtomValue(alertAtom(id));
}
