import {
  Box,
  Container,
  Flex,
  IconButton,
  Stack,
  useFuelTheme,
} from "@fuels-ui/react";
import { useSetAtom } from "jotai";
import { Wallet } from "fuels";
import { ChangeEvent } from "react";

import { useWallet, useWalletList } from "../context/AppContext";
import { walletIndexAtom } from "../jotai";
import { Dropdown } from "./Dropdown";

import { WalletWidget } from "./WalletWidget";

export function TopNav() {
  const { theme, toggleTheme } = useFuelTheme();
  const wallet = useWallet();
  const wallets = useWalletList();
  const setCurrentWalletIndex = useSetAtom(walletIndexAtom);

  const getWalletOptions = () => {
    let walletOptions = [];
    for (const [i, wallet] of wallets!.entries()) {
      walletOptions.push(<option key={i} value={i}>{wallet?.address.slice(0, 4)}...{wallet?.address.slice(-4)}</option>);
    }
    return walletOptions;
  }

  const handleWalletChange = (event: ChangeEvent) => {
    const currentWalletIndex = parseInt((event.target as HTMLInputElement).value);
    setCurrentWalletIndex(currentWalletIndex);
  };

  return (
    <Box css={{ borderBottom: "1px solid $gray5", background: "$gray3" }}>
      <Container>
        <Flex css={{ py: "$8" }}>
          <Stack gap="$6" direction="row" css={{ flex: 1 }}></Stack>
        {wallet && <WalletWidget />}
        <Dropdown onChange={handleWalletChange}>
          {getWalletOptions()}
        </Dropdown>
          <IconButton
            variant="link"
            aria-label="Theme Switcher"
            icon={theme === "light" ? "MoonIcon" : "SunIcon"}
            color={theme === "light" ? "gray" : "yellow"}
            onPress={toggleTheme}
          />
        </Flex>
      </Container>
    </Box>
  );
}
