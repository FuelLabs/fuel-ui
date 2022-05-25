import { useNavigate } from "react-router-dom";
import { Layout } from "../components/Layout";
import { useAppContext } from "../context/AppContext";
import { Pages } from "../types/pages";
import { Card, Button } from "@fuels-ui/react";


export default function CreateWallet() {
    const { createWallet } = useAppContext()!;
    const navigate = useNavigate();

    // const createWalletMutation = useMutation(async () => createWallet, {
    //     onSuccess: () => {
    //         navigate(Pages.escrow);
    //     },
    // });

    function handleCreateWallet() {
        //createWalletMutation.mutate();
        createWallet();
        navigate(Pages.escrow);
    }

    return (
        <Layout>
            <Card>
                <div className="flex flex-col justify-center text-gray-400 prose text-center">
                    <h3 className="text-gray-300 mb-0">⚡️ Welcome SwaySwap</h3>
                    <p>
                        Seems like you don&apos;t have any wallet yet.
                        <br /> Click below to generate one.
                    </p>
                    <div>
                        <Button variant="solid" size="lg" onPress={handleCreateWallet}>
                            Create Wallet
                        </Button>
                    </div>
                </div>
            </Card>
        </Layout>
    );
}