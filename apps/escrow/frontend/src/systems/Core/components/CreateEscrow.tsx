import { BoxCentered, Button, Stack, Input, Card, Flex } from "@fuels-ui/react";
import { InputElementRight } from "@fuels-ui/react/src/components/Input/InputElement";
import { InputField } from "@fuels-ui/react/src/components/Input/InputField";
import { ChangeEvent, SyntheticEvent, useState } from "react";

import { AddressInputContainer } from "./AddressInputContainer"
import { AssetInputContainer } from "./AssetInputContainer";

export const CreateEscrow = () => {
    const [users, setUsers] = useState(["", ""]);

    const handleUsersChange = (event: ChangeEvent<HTMLInputElement>, userIdx: number) => {
        const newUsers = [...users];
        newUsers[userIdx] = event.target.value;
        setUsers(newUsers);
    }

    const handleAddUser = (event: any) => {
        setUsers([...users, ""]);
    }

    // TODO (FIX) the way we remove and display users this really just pops the last user from the list
    const handleRemoveUser = (userId: number) => {
        setUsers(users.filter((user, i) => {
            return i !== userId;
        }));
    }

    const handleSubmit = (event: SyntheticEvent) => {
        event.preventDefault();
        console.log(users);
    }


    return (
        <Flex css={{ flex: "1", justifyContent: "center" }}>
            <Card css={{ margin: "10px", bg: "$gray7", marginTop: "50px" }}>
                <form onSubmit={handleSubmit}>
                    <Stack css={{ width: "475px", margin: "10px", alignItems: "center" }}>
                        <AddressInputContainer
                            onAddUser={handleAddUser}
                            onRemoveUser={handleRemoveUser}
                            onUserInfoChange={handleUsersChange}
                            users={users}
                        />
                        <AssetInputContainer />
                        <Button type="submit" leftIcon="PlusIcon" css={{ font: "$sans", alignSelf: "stretch" }}>Create Escrow</Button>
                    </Stack>
                </form>
            </Card>
        </Flex>
    );
}