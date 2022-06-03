import { Box, Heading, Stack } from "@fuels-ui/react";
import { formatUnits } from "ethers/lib/utils";
import { useAssets } from "../hooks/useAssets";

import { css } from "@fuels-ui/css";
import { Card } from "@fuels-ui/react";
import { CardHeader } from "@fuels-ui/react/src/components/Card/CardHeader";
import { CardBody } from "@fuels-ui/react/src/components/Card/CardBody";

export const ShowBalances = () => {
    const coins = useAssets();

    const formatValue = (amount: bigint | null | undefined) => {
        if (amount != null) {
            return formatUnits(amount, 18)
        }
        return "";
    }

    return (
        <Box css={{ width: "250px" }}>
            <Card css={{ bg: "$gray7" }}>
                <CardHeader>
                    <Heading>
                        Balances
                    </Heading>
                </CardHeader>
                <CardBody>
                    <Stack>
                        {coins.map((coin) => (
                            <div className={coinStyle()} key={coin.assetId}>
                                {formatValue(coin.amount)} {coin.symbol}
                            </div>
                        ))}
                    </Stack>
                </CardBody>
            </Card>
        </Box>
    );
}

const coinStyle = css({
    bg: "$accent9",
    color: "$gray1",
    textSize: "base",
    font: "$sans",
    display: "inline-flex",
    border: "1px solid transparent",
    borderRadius: "$lg",
});