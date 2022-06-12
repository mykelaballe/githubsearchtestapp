import { StyleSheet, Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export default StyleSheet.create({
    list: {
        marginBottom: 70
    },
    item: {
        flex: 1,
        width: width / 2,
        height: 90,
        borderWidth: StyleSheet.hairlineWidth,
        padding: 10,
        margin: 3,
        justifyContent: "center"
    },
    itemName: {
        fontWeight: "700",
        fontSize: 16
    }
});