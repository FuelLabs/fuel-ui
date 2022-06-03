import type { UseQueryOptions } from "react-query";
import { useQuery } from "react-query";

import { useWallet } from "../context/AppContext";

export function useBalances(opts: UseQueryOptions = {}) {
    const wallet = useWallet();
    return useQuery('EscrowPage-balances', () => wallet?.getBalances(), opts as any); // eslint-disable-line @typescript-eslint/no-explicit-any
}