import { Wallet } from "fuels";
import { useAtom } from "jotai";
import React, { useContext, useState, useMemo } from "react";
import type { PropsWithChildren } from "react";

import { FUEL_PROVIDER_URL } from "../../../config";
import { walletIndexAtom } from "../jotai";

// Initial number of wallets to populate in app
const NUM_WALLETS = 10;

interface AppContextValue {
    wallets: Array<Wallet> | null;
    wallet: Wallet | null;
    createWallets: () => void;
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
}

export const AppContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
    const [currentWalletIndex, setCurrentWalletIndex] = useAtom(walletIndexAtom);
    const [privateKeyList, setPrivateKeyList] = useState<Array<string> | null>([]);

    const wallets = useMemo(() => {
        if (!privateKeyList) {
            return null;
        }
        let walletList: Array<Wallet> | null = Array();
        privateKeyList.forEach(privateKey => {
            walletList?.push(new Wallet (privateKey, FUEL_PROVIDER_URL));
        });
        return walletList;

    }, [privateKeyList]);

    const wallet = useMemo(() => {
        if (!currentWalletIndex || !wallets) {
            return null;
        }
        return wallets[currentWalletIndex];
    }, [currentWalletIndex]);

    return (
        <AppContext.Provider
            value={{
                wallets,
                wallet,
                createWallets: () => {
                    let walletList: Array<Wallet | null> = Array(NUM_WALLETS);
                    let nextWallet: Wallet;
                    // TODO this is only generate two unique wallets
                    for (let i = 0; i < NUM_WALLETS; i++) {
                        nextWallet = Wallet.generate({
                            provider: FUEL_PROVIDER_URL,
                        });
                        walletList[i] = nextWallet;
                        setPrivateKeyList(oldPrivateKeyList => [...oldPrivateKeyList!, nextWallet.privateKey]);
                    }
                    setCurrentWalletIndex(0);
                    return walletList;
                }
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
