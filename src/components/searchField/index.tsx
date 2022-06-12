import React, { SetStateAction, forwardRef } from "react";
import { TextInput as TextField } from "react-native";

interface ISearchFieldProps {
    value: string;
    onChangeText: (text: SetStateAction<string>) => void;
}

export default forwardRef((props: ISearchFieldProps, ref) => {

    const handleChangeSearch = (text: SetStateAction<string>) => {
        props.onChangeText(text);
    };

    return (
        <TextField
            ref={ref}
            placeholder="Search here"
            placeholderTextColor="gray"
            value={props.value}
            onChangeText={handleChangeSearch}
            style={{
                borderWidth: 1,
                borderColor: "gray",
                padding: 10,
                borderRadius: 10
            }}
        />
    );
});