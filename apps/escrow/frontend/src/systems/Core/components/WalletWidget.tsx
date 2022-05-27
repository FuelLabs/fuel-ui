import { css } from "@fuels-ui/css";
import { Button } from "@fuels-ui/react";
import clipboard from "clipboard";
import { useSetAtom } from "jotai";
import type { ChangeEvent } from "react";
import { FaRegCopy } from "react-icons/fa";

import { useWallet, useWalletList } from "../context/AppContext";
import { walletIndexAtom } from "../jotai";

import { Dropdown } from "./Dropdown";

const WALLET_NAMES = [
  "Ava",
  "Bob",
  "Charlie",
  "Dan",
  "Elmo",
  "Felicia",
  "Hannah",
  "Ian",
  "Jess",
  "Kelvin",
];

export const WalletWidget = () => {
  const wallets = useWalletList();
  const wallet = useWallet();
  const setCurrentWalletIndex = useSetAtom(walletIndexAtom);

  const getWalletOptions = () => {
    const walletOptions: Array<JSX.Element> = [];
    wallets?.forEach(async (nextWallet, i) => {
      console.log(await nextWallet.getBalances());
      walletOptions.push(
        <option key={i} value={i}>
          {nextWallet?.address.slice(0, 4)}...{nextWallet?.address.slice(-4)}
          ({WALLET_NAMES[i]})
        </option>
      );
    });
    return walletOptions;
  };

  const handleWalletChange = (event: ChangeEvent) => {
    const currentWalletIndex = parseInt(
      (event.target as HTMLInputElement).value,
      10
    );
    setCurrentWalletIndex(currentWalletIndex);
  };

  const handleCopy = () => {
    clipboard.copy(wallet!.address);
  };

  return (
    <>
      <Dropdown className={dropDownStyle()} onChange={handleWalletChange}>
        {getWalletOptions()}
      </Dropdown>
      <Button aria-label="Copy your wallet address" onPress={handleCopy}>
        <FaRegCopy size="1em" />
      </Button>
    </>
  );
};

const dropDownStyle = css({
  bg: "$accent9",
  color: "$gray1",
  textSize: "base",
  font: "$sans",
  cursor: "pointer",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid transparent",
  borderRadius: "$lg",
});
