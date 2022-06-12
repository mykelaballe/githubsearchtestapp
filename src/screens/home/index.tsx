import React, { useState, SetStateAction } from "react";
import { Linking } from "react-native";

import { useDispatch } from "react-redux";

import { useAppSelector } from "store";
import { attemptGetRepo } from "store/reducer/repo";
import { RepoItem } from "utils/types";

import Component from "./component";

export default () => {
    const {
        list: {
            requesting
        }
    } = useAppSelector((state) => state.repo);
    const dispatch = useDispatch();

    const [searchValue, setSearchValue] = useState("");

    const handleChangeText = (text: SetStateAction<string>) => {
        setSearchValue(text);
    };

    const handleSubmit = async () => {
        if (!requesting) {
            dispatch(
                attemptGetRepo(searchValue)
            );
        }
    };

    const handleView = (repo: RepoItem) => {
        Linking.openURL(repo.html_url);
    };

    return (
        <Component
            searchValue={searchValue}
            onChangeSearch={handleChangeText}
            onSubmit={handleSubmit}
            onView={handleView}
        />
    );
};