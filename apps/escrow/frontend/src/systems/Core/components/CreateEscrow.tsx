import { BoxCentered, Button, Stack, Input, Card, Flex } from "@fuels-ui/react";
import { InputElementRight } from "@fuels-ui/react/src/components/Input/InputElement";
import { InputField } from "@fuels-ui/react/src/components/Input/InputField";
import { ChangeEvent, SyntheticEvent, useState } from "react";

import { AddressInputContainer } from "./AddressInputContainer"

export const CreateEscrow = () => {
    const [formState, setFormState] = useState({
        users: ["", ""],
        assets: [{
            assetId: "",
            assetAmount: ""
        }]
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

    const handleAddAsset = () => {
        setFormState({
            ...formState,
            assets: [...(formState.assets), { assetId: "", assetAmount: "" }]
        });
    }

    const handleRemoveAsset = (assetIdx: number) => {
        setFormState({
            ...formState,
            assets: formState.assets.filter((asset, i) => {
                return i !== assetIdx;
            })
        });
    }

    return (
        <Flex css={{ flex: "1", justifyContent: "center" }}>
            <Card css={{ margin: "10px", bg: "$gray7", marginTop: "50px" }}>
                <form onSubmit={handleSubmit}>
                    <Stack css={{ width: "475px", margin: "10px", alignItems: "center" }}>
                        <AddressInputContainer />
                        {formState.assets.map((asset, i) => (
                            <>
                                <Input css={{ alignSelf: "stretch" }}>
                                    <InputField
                                        id={`assetId${i}`}
                                        name={`assetId${i}`}
                                        placeholder={`Asset ${i} Id`}
                                        type="text"
                                        onChange={handleChange}
                                        css={{ font: "$sans" }}
                                    />
                                </Input>
                                <Input css={{ alignSelf: "stretch" }}>
                                    <InputField
                                        id={`assetAmount${i}`}
                                        name={`assetAmount${i}`}
                                        placeholder={`Asset ${i} Amount`}
                                        type="text"
                                        onChange={handleChange}
                                        css={{ font: "$sans" }}
                                    />
                                    <InputElementRight>
                                        <Button color="tomato" leftIcon="DividerHorizontalIcon" onPress={() => handleRemoveAsset(i)} />
                                    </InputElementRight>
                                </Input>
                            </>
                        ))}
                        <Button leftIcon="PlusIcon" css={{ font: "$sans", width: "50%" }} onPress={handleAddAsset}>Add Asset</Button>
                        <Button type="submit" leftIcon="PlusIcon" css={{ font: "$sans", alignSelf: "stretch" }}>Create Escrow</Button>
                    </Stack>
                </form>
            </Card>
        </Flex>
    );
}