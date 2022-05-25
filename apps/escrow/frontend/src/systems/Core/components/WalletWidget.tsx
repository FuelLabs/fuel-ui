import clipboard from "clipboard";
import { FaRegCopy } from "react-icons/fa";

import { Button } from "@fuels-ui/react"
import { useWallet } from "../context/AppContext"

export const WalletWidget = () => {
    const wallet = useWallet();

    const handleCopy = () => {
        clipboard.copy(wallet!.address);
    }

    return (
        <>
        <div className="flex items-center bg-gray-700 rounded-full">
            <Button>
              {wallet?.address.slice(0, 4)}...{wallet?.address.slice(-4)}
            </Button>
            {/* <Popover {...popover.rootProps}>
              <WalletInfo onClose={handleClose} />
            </Popover> */}
            <Button
              aria-label="Copy your wallet address"
              onPress={handleCopy}
            >
              <FaRegCopy size="1em" />
            </Button>
        </div>
      </>
    )
}