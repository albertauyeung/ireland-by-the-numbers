import { useEffect, useState } from 'react';
import { fetchTable, type JsonStat } from './pxstat';

type State =
  | { status: 'loading' }
  | { status: 'ready'; data: JsonStat }
  | { status: 'error'; error: unknown };

export function useTable(code: string | undefined): State {
  const [state, setState] = useState<State>({ status: 'loading' });
  useEffect(() => {
    if (!code) return;
    let cancelled = false;
    setState({ status: 'loading' });
    fetchTable(code)
      .then((data) => {
        if (!cancelled) setState({ status: 'ready', data });
      })
      .catch((error) => {
        if (!cancelled) setState({ status: 'error', error });
      });
    return () => {
      cancelled = true;
    };
  }, [code]);
  return state;
}
