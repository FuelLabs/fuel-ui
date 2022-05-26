import clipboard from "clipboard";
import { FaRegCopy } from "react-icons/fa";

import { Button } from "@fuels-ui/react"
import { useSetAtom } from "jotai"
import { ChangeEvent } from "react";

import { useWallet, useWalletList } from "../context/AppContext"
import { walletIndexAtom } from "../jotai";
import { Dropdown } from "./Dropdown";

const WALLET_NAMES = ["Ava", "Bob", "Charlie", "Dan", "Elmo", "Felicia", "Hannah", "Ian", "Jess", "Kelvin"];

const optionStyle = {
  fontFamily: "sans-serif"
};

export const WalletWidget = () => {
  const wallets = useWalletList();
  const wallet = useWallet();
  const setCurrentWalletIndex = useSetAtom(walletIndexAtom);

  const getWalletOptions = () => {
    let walletOptions = [];
    for (const [i, wallet] of wallets!.entries()) {
      walletOptions.push(
        <option key={i} value={i} style={optionStyle}>
          {wallet?.address.slice(0, 4)}...{wallet?.address.slice(-4)} ({WALLET_NAMES[i]})
        </option>
      );
    }
    return walletOptions;
  }

  const handleWalletChange = (event: ChangeEvent) => {
    const currentWalletIndex = parseInt((event.target as HTMLInputElement).value);
    setCurrentWalletIndex(currentWalletIndex);
  };

  const handleCopy = () => {
    clipboard.copy(wallet!.address);
  }

  return (
    <>
      <Dropdown onChange={handleWalletChange}>
        {getWalletOptions()}
      </Dropdown>
      <Button
        aria-label="Copy your wallet address"
        onPress={handleCopy}
      >
        <FaRegCopy size="1em" />
      </Button>
    </>
  )
}