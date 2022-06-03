import { CoinsMetadata } from "@/config";
import { CoinQuantity, toBigInt } from "fuels";
import { useWallet } from "../context/AppContext"
import { useBalances } from "./useBalances";

const mergeCoinsWithMetadata = (coins: CoinQuantity[] = []) => 
    coins.map((coin) => {
        const coinMetadata = CoinsMetadata.find((c) => c.assetId === coin.assetId);
        return {
            name: coinMetadata?.name,
            assetId: coin.assetId,
            symbol: coinMetadata?.symbol,
            amount: toBigInt(coin.amount || 0)
        };
    });

export const useAssets = () => {
    const { data: balances } = useBalances();

    const coins = mergeCoinsWithMetadata(balances);
    return coins;
}