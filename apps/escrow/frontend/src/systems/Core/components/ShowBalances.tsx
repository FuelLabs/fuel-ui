import { css } from "@fuels-ui/css";
import { Flex, Heading, Stack, Card } from "@fuels-ui/react";
import { CardBody } from "@fuels-ui/react/src/components/Card/CardBody";
import { CardHeader } from "@fuels-ui/react/src/components/Card/CardHeader";
import { formatUnits } from "ethers/lib/utils";

import { useAssets } from "../hooks/useAssets";

import { DECIMAL_PLACES } from "@/config";

export const ShowBalances = () => {
    const coins = useAssets();

    const formatValue = (amount: bigint | null | undefined) => {
        if (amount != null) {
            return formatUnits(amount, DECIMAL_PLACES);
        }
        return "";
    }

    return (
        // <Box as="aside" css={{ width: "250px" }}>
        <Flex css={{ direction: "rtl" }}>
            <Flex css={{ direction: "ltr" }}>
                <Card css={{ width: "250px", bg: "$gray7" }}>
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
            </Flex>
        </Flex>
        // </Box>
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