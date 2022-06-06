import { Button, Input, Card } from "@fuels-ui/react";
import { InputElementRight } from "@fuels-ui/react/src/components/Input/InputElement";
import { InputField } from "@fuels-ui/react/src/components/Input/InputField";
import { useState } from "react";
import type { ChangeEvent } from "react";

export const AddressInputContainer = () => {
    const [users, setUsers] = useState(["", ""]);

    const handleChange = (event: ChangeEvent<HTMLInputElement>, userIdx: number) => {
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

    return (
        <>
            {users.map((user, i) => (
                <Input css={{ alignSelf: "stretch" }} >
                    <InputField
                        id={`user${i}`}
                        name={`user${i}`}
                        placeholder={`User ${i} Address`}
                        type="text"
                        onChange={(e) => handleChange(e, i)}
                        css={{ font: "$sans" }}
                    />
                    <InputElementRight>
                        <Button color="tomato" leftIcon="DividerHorizontalIcon" onPress={() => handleRemoveUser(i)} />
                    </InputElementRight>
                </Input>
            ))}
            <Button leftIcon="PlusIcon" css={{ font: "$sans", width: "50%" }} onPress={handleAddUser}>Add User</Button>
        </>
    );
}