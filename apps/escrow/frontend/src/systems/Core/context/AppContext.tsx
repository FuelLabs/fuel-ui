import { parseUnits, randomBytes } from 'ethers/lib/utils';
import {
  NativeAssetId,
  ScriptTransactionRequest,
  Wallet,
} from 'fuels';
import { useAtom } from "jotai";
import React, { useContext, useState, useMemo, useEffect } from "react";
import type { PropsWithChildren } from "react";

import { FUEL_PROVIDER_URL } from "../../../config";
import { walletIndexAtom } from "../jotai";

// Initial number of wallets to populate in app
const NUM_WALLETS = 10;

interface AppContextValue {
  wallets: Array<Wallet> | null;
  wallet: Wallet | null;
}

export const AppContext = React.createContext<AppContextValue | null>(null);

export const useAppContext = () => useContext(AppContext);

export const useWallet = () => {
  const { wallet } = useContext(AppContext)!;
  return wallet;
};

export const useWalletList = () => {
  const { wallets } = useContext(AppContext)!;
  return wallets;
};

// @ts-ignore
export const seedWallet = async (wallet: Wallet) => {
  const transactionRequest = new ScriptTransactionRequest({
    gasPrice: 0,
    gasLimit: '0x0F4240',
    script: '0x24400000',
    scriptData: randomBytes(32),
  });
  // @ts-ignore
  transactionRequest.addCoin({
    id: '0x000000000000000000000000000000000000000000000000000000000000000000',
    assetId: NativeAssetId,
    amount: parseUnits('1', 18).toBigInt(),
    owner: '0xf1e92c42b90934aa6372e30bc568a326f6e66a1a0288595e6e3fbd392a4f3e6e',
  });
  transactionRequest.addCoinOutput(wallet.address, parseUnits('1', 18).toBigInt(), NativeAssetId);
  const submit = await wallet.sendTransaction(transactionRequest);

  return submit.wait();
};

export const AppContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [currentWalletIndex, setCurrentWalletIndex] = useAtom(walletIndexAtom);
  const [privateKeyList, setPrivateKeyList] = useState<Array<string> | null>(
    []
  );

  const wallets = useMemo(() => {
    if (!privateKeyList) {
      return null;
    }
    const walletList: Array<Wallet> | null = [];
    privateKeyList.forEach((privateKey) => {
      walletList?.push(new Wallet(privateKey, FUEL_PROVIDER_URL));
    });
    return walletList;
  }, [privateKeyList]);

  const wallet = useMemo(() => {
    if (currentWalletIndex === null || !wallets) {
      return null;
    }
    return wallets[currentWalletIndex];
  }, [currentWalletIndex]);

  // TODO store wallets in local storage or somewhere more persistant
  useEffect(() => {
    if (wallets!.length > 0) {
      return;
    }
    const nextPrivateKeyList: Array<string> | null = Array(NUM_WALLETS);
    for (let i = 0; i < NUM_WALLETS; i += 1) {
      const nextWallet = Wallet.generate({
        provider: FUEL_PROVIDER_URL,
      });
      seedWallet(nextWallet);
      nextPrivateKeyList[i] = nextWallet.privateKey;
    }
    setPrivateKeyList(nextPrivateKeyList);
    setCurrentWalletIndex(0);
  });

  return (
    <AppContext.Provider
      value={{
        wallets,
        wallet,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
