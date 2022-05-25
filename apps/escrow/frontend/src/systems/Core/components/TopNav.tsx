import {
  Box,
  Button,
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



  return (
    <Box css={{ borderBottom: "1px solid $gray5", background: "$gray3" }}>
      <Container>
        <Flex css={{ py: "$8" }}>
          <Stack gap="$6" direction="row" css={{ flex: 1 }}></Stack>
        {wallet && <WalletWidget />}
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
