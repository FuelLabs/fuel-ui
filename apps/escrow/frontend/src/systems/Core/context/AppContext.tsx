import { Wallet } from "fuels";
import React, { useContext, useState, useMemo } from "react";
import type { PropsWithChildren } from "react";

import { FUEL_PROVIDER_URL } from "../../../config";

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
    const [privateKey, setPrivateKey] = useState<string | null>(null);
    const [privateKeyList, setPrivateKeyList] = useState<Array<string> | null>([]);

    const wallets = useMemo(() => {
        console.log("wallet list");
        if (!privateKeyList) {
            return null;
        }
        let walletList: Array<Wallet> | null = Array();
        console.log(walletList);
        privateKeyList.forEach(privateKey => {
            walletList?.push(new Wallet (privateKey, FUEL_PROVIDER_URL));
        });
        return walletList;

    }, [privateKeyList]);

    const wallet = useMemo(() => {
        if (!privateKey) {
            return null;
        }
        return new Wallet(privateKey, FUEL_PROVIDER_URL)
    }, [privateKey]);

    return (
        <AppContext.Provider
            value={{
                wallets,
                wallet,
                createWallets: () => {
                    let walletList: Array<Wallet | null> = Array(NUM_WALLETS);
                    let nextWallet: Wallet;
                    for (let i = 0; i < NUM_WALLETS; i++) {
                        nextWallet = Wallet.generate({
                            provider: FUEL_PROVIDER_URL,
                        });
                        walletList[i] = nextWallet;
                        setPrivateKeyList(oldPrivateKeyList => [...oldPrivateKeyList!, nextWallet.privateKey]);
                    }
                    setPrivateKey(walletList[0]!.privateKey);
                    return walletList;
                }
            }}
        >
            {children}
        </AppContext.Provider>
    );
}
