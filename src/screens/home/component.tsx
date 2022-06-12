import React, { SetStateAction } from "react";
import {
    SafeAreaView,
    View,
    Text,
    Button,
    FlatList,
    ActivityIndicator,
    TouchableOpacity
} from "react-native";

import { SearchField } from "components";
import { useAppSelector } from "store";
import { RepoItem } from "utils/types";

import styles from "./style";

interface ComponentProps {
    searchValue: string;
    onChangeSearch: (text: SetStateAction<string>) => void;
    onSubmit: () => void;
    onView: (repo: RepoItem) => void;
}

export default (props: ComponentProps) => {
    const {
        searchValue,
        onChangeSearch,
        onSubmit,
        onView
    } = props;

    const {
        list: {
            requesting,
            data
        }
    } = useAppSelector((state) => state.repo);

    const renderItem = ({ item, index }: { item: RepoItem, index: number; }) => {
        return (
            <TouchableOpacity key={index} style={styles.item} onPress={() => onView(item)}>
                <Text style={styles.itemName} numberOfLines={2}>
                    {item.name}
                </Text>

                <Text>★ {item.stargazers_count}</Text>
                <Text>Ψ {item.forks_count}</Text>
            </TouchableOpacity>
        );
    };

    return (
        <SafeAreaView style={{ marginHorizontal: 20 }}>
            <Text>Search for a repository</Text>

            <SearchField
                value={searchValue}
                onChangeText={onChangeSearch}
            />

            <Button
                disabled={requesting || !searchValue.trim()}
                title="Submit"
                onPress={onSubmit}
            />

            {requesting && <ActivityIndicator />}

            <FlatList
                data={data}
                renderItem={renderItem}
                style={styles.list}
                numColumns={2}
                showsVerticalScrollIndicator={false}
            />
        </SafeAreaView>
    );
};