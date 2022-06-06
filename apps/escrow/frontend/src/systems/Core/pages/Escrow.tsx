import { useAtomValue } from "jotai";

import { Layout } from "../components/Layout";
import { ShowBalances } from "../components/ShowBalances";
import { showBalancesAtom } from "../jotai";

export default function EscrowPage() {
  const showBalances = useAtomValue(showBalancesAtom);

  return <Layout>{showBalances && <ShowBalances />}</Layout>;
}
