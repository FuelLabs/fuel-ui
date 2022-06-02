import { BoxCentered, Button, Stack, Input, Card, Flex } from "@fuels-ui/react";
import { InputField } from "@fuels-ui/react/src/components/Input/InputField";
import { ChangeEvent, SyntheticEvent, useState } from "react";

export const CreateEscrow = () => {
    const [formState, setFormState] = useState({
        buyerAddress: "",
        sellerAddress: "",
        assetId: "",
        assetAmount: ""
    });

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(formState);
    }

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormState({
            ...formState,
            [event.target.name]: event.target.value
        });
    }
    return (
        <Flex css={{ flex: "1", justifyContent: "center" }}>
            <Card css={{ margin: "10px", alignItems: "center", bg: "$gray7", marginTop: "50px" }}>
                <form onSubmit={handleSubmit}>
                    <Stack css={{ width: "475px", margin: "10px" }}>
                        <Input>
                            <InputField
                                id="buyer"
                                name="buyer"
                                placeholder="Buyer Address"
                                type="text"
                                onChange={handleChange}
                                css={{ font: "$sans" }}
                            />
                        </Input>
                        <Input>
                            <InputField
                                id="seller"
                                name="seller"
                                placeholder="Seller Address"
                                type="text"
                                onChange={handleChange}
                                css={{ font: "$sans" }}
                            />
                        </Input>
                        <Input>
                            <InputField
                                id="assetId"
                                name="assetId"
                                placeholder="Asset Id"
                                type="text"
                                onChange={handleChange}
                                css={{ font: "$sans" }}
                            />
                        </Input>
                        <Input>
                            <InputField
                                id="assetAmount"
                                name="assetAmount"
                                placeholder="Asset Amount"
                                type="text"
                                onChange={handleChange}
                                css={{ font: "$sans" }}
                            />
                        </Input>
                        <Button type="submit" leftIcon="PlusIcon" css={{ font: "$sans" }}>Create Escrow</Button>
                    </Stack>
                </form>
            </Card>
        </Flex>
    );
}