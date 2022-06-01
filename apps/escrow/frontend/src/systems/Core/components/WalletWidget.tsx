import { css } from "@fuels-ui/css";
import { Button } from "@fuels-ui/react";
import clipboard from "clipboard";
import { BigNumber } from "ethers";
import { toBigInt } from "fuels";
import type { CoinQuantity } from "fuels";
import { useSetAtom } from "jotai";
import { useEffect, useState } from "react";
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
  const [balance, setBalance] = useState<CoinQuantity | null>({
    amount: toBigInt(0),
    assetId: "",
  });

  // TODO there is probably a much better way to load the balance
  useEffect(() => {
    if (!wallet) {
      return;
    }
    loadBalance();

    async function loadBalance() {
      const nextBalance = await wallet?.getBalances();

      // TODO fix hardcoding which balance we set
      setBalance(nextBalance![0]);
    }
  }, [wallet]);

  const getWalletOptions = () => {
    const walletOptions: Array<JSX.Element> = [];
    wallets?.forEach((nextWallet, i) => {
      walletOptions.push(
        <option key={i} value={i}>
          {nextWallet?.address.slice(0, 4)}...{nextWallet?.address.slice(-4)} (
          {WALLET_NAMES[i]})
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

  // TODO format the eth in a better way and maybe make it generic for different coins
  return (
    <>
      <div className={balanceStyle()}>
        {BigNumber.from(balance?.amount).div("1000000000000000000")!.toString()}{" "}
        (ETH)
      </div>
      <Dropdown className={dropDownStyle()} onChange={handleWalletChange}>
        {getWalletOptions()}
      </Dropdown>
      <Button aria-label="Copy your wallet address" onPress={handleCopy}>
        <FaRegCopy size="1em" />
      </Button>
    </>
  );
};

const balanceStyle = css({
  bg: "$accent9",
  color: "$gray1",
  textSize: "base",
  font: "$sans",
  display: "inline-flex",
  alignItems: "center",
  justifyContent: "center",
  border: "1px solid transparent",
  borderRadius: "$lg",
});

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
