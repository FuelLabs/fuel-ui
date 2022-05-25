import { Wallet } from "fuels";
import React, { useContext, useState, useMemo } from "react";
import type { PropsWithChildren } from "react";

import { FUEL_PROVIDER_URL } from "../../../config";

interface AppContextValue {
  wallet: Wallet | null;
  createWallet: () => void;
}

export const AppContext = React.createContext<AppContextValue | null>(null);

export const useAppContext = () => useContext(AppContext);

export const useWallet = () => {
  const { wallet } = useContext(AppContext)!;
  return wallet;
};

export const AppContextProvider = ({
  children,
}: PropsWithChildren<unknown>) => {
  const [privateKey, setPrivateKey] = useState<string | null>(null);

  const wallet = useMemo(() => {
    if (!privateKey) {
      return null;
    }
    return new Wallet(privateKey, FUEL_PROVIDER_URL);
  }, [privateKey]);

  return (
    <AppContext.Provider
      value={{
        wallet,
        createWallet: () => {
          const nextWallet = Wallet.generate({
            provider: FUEL_PROVIDER_URL,
          });
          setPrivateKey(nextWallet.privateKey);
          return nextWallet;
        },
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
