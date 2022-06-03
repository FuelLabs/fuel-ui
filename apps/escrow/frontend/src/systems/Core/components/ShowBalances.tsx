import { Box, Stack } from "@fuels-ui/react";
import { formatUnits } from "ethers/lib/utils";
import { useAssets } from "../hooks/useAssets";

export const ShowBalances = () => {
    const coins = useAssets();

    const formatValue = (amount: bigint | null | undefined) => {
        if (amount != null) {
            return formatUnits(amount, 18)
        }
        return "";
    }
 
    return (
        <Box>
            <Stack>
                {coins.map((coin) => (
                    <div className="mt-4" key={coin.assetId}>
                        {formatValue(coin.amount)} {coin.symbol}
                    </div>
                ))}
            </Stack>
        </Box>
    );    
}