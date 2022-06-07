import { useState } from "react";
import type { ChangeEvent } from "react";

import { Input, Button } from "@fuels-ui/react"
import { InputField } from "@fuels-ui/react/src/components/Input/InputField";
import { InputElementRight } from "@fuels-ui/react/src/components/Input/InputElement";

interface Props {
    assets: {
        assetId: string;
        assetAmount: string;
    }[];
    onAssetIdChange: (event: ChangeEvent<HTMLInputElement>, assetIdx: number) => void;
    onAssetAmountChange: (event: ChangeEvent<HTMLInputElement>, assetIdx: number) => void;
    onAddAsset: () => void;
    onRemoveAsset: (assetIdx: number) => void;
}

export const AssetInputContainer = (props: Props) => {
    // const [assets, setAssets] = useState([{
    //     assetId: "",
    //     assetAmount: ""
    // }]);

    // const handleAssetIdChange = (event: ChangeEvent<HTMLInputElement>, assetIdx: number) => {
    //     const newAssets = [...assets];
    //     newAssets[assetIdx].assetId = event.target.value;
    //     setAssets(newAssets);
    // }

    // const handleAssetAmountChange = (event: ChangeEvent<HTMLInputElement>, assetIdx: number) => {
    //     const newAssets = [...assets];
    //     newAssets[assetIdx].assetAmount = event.target.value;
    //     setAssets(newAssets);
    // }

    // const handleAddAsset = () => {
    //     setAssets([...assets, { assetId: "", assetAmount: "" }]);
    // }

    // const handleRemoveAsset = (assetIdx: number) => {
    //     setAssets(assets.filter((asset, i) => {
    //         return i !== assetIdx;
    //     }));
    // }

    return (
        <>
            {props.assets.map((asset, i) => (
                <>
                    <Input css={{ alignSelf: "stretch" }}>
                        <InputField
                            id={`assetId${i}`}
                            name={`assetId${i}`}
                            placeholder={`Asset ${i} Id`}
                            type="text"
                            onChange={(e) => props.onAssetIdChange(e, i)}
                            css={{ font: "$sans" }}
                        />
                    </Input>
                    <Input css={{ alignSelf: "stretch" }}>
                        <InputField
                            id={`assetAmount${i}`}
                            name={`assetAmount${i}`}
                            placeholder={`Asset ${i} Amount`}
                            type="text"
                            onChange={(e) => props.onAssetAmountChange(e, i)}
                            css={{ font: "$sans" }}
                        />
                        <InputElementRight>
                            <Button color="tomato" leftIcon="DividerHorizontalIcon" onPress={() => props.onRemoveAsset(i)} />
                        </InputElementRight>
                    </Input>
                </>
            ))}
            <Button leftIcon="PlusIcon" css={{ font: "$sans", width: "50%" }} onPress={props.onAddAsset}>Add Asset</Button>
        </>
    );
}