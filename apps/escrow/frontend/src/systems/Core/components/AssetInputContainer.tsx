import { useState } from "react";
import type { ChangeEvent } from "react";

import { Input, Button } from "@fuels-ui/react"
import { InputField } from "@fuels-ui/react/src/components/Input/InputField";
import { InputElementRight } from "@fuels-ui/react/src/components/Input/InputElement";

export const AssetInputContainer = () => {
    const [assets, setAssets] = useState([{
        assetId: "",
        assetAmount: ""
    }]);

    const handleAssetIdChange = (event: ChangeEvent<HTMLInputElement>, assetIdx: number) => {
        const newAssets = [...assets];
        newAssets[assetIdx].assetId = event.target.value;
        setAssets(newAssets);
    }

    const handleAssetAmountChange = (event: ChangeEvent<HTMLInputElement>, assetIdx: number) => {
        const newAssets = [...assets];
        newAssets[assetIdx].assetAmount = event.target.value;
        setAssets(newAssets);
    }

    const handleAddAsset = () => {
        setAssets([...assets, { assetId: "", assetAmount: "" }]);
    }

    const handleRemoveAsset = (assetIdx: number) => {
        setAssets(assets.filter((asset, i) => {
            return i !== assetIdx;
        }));
    }

    return (
        <>
            {assets.map((asset, i) => (
                <>
                    <Input css={{ alignSelf: "stretch" }}>
                        <InputField
                            id={`assetId${i}`}
                            name={`assetId${i}`}
                            placeholder={`Asset ${i} Id`}
                            type="text"
                            onChange={(e) => handleAssetIdChange(e, i)}
                            css={{ font: "$sans" }}
                        />
                    </Input>
                    <Input css={{ alignSelf: "stretch" }}>
                        <InputField
                            id={`assetAmount${i}`}
                            name={`assetAmount${i}`}
                            placeholder={`Asset ${i} Amount`}
                            type="text"
                            onChange={(e) => handleAssetAmountChange(e, i)}
                            css={{ font: "$sans" }}
                        />
                        <InputElementRight>
                            <Button color="tomato" leftIcon="DividerHorizontalIcon" onPress={() => handleRemoveAsset(i)} />
                        </InputElementRight>
                    </Input>
                </>
            ))}
            <Button leftIcon="PlusIcon" css={{ font: "$sans", width: "50%" }} onPress={handleAddAsset}>Add Asset</Button>
        </>
    );
}