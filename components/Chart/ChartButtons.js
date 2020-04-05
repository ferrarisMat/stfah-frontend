import React from "react";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ChartButton from '../Chart/ChartButton';

export default function() {
    const changeGraphView = function() {
        console.log('ok');
    }

    return (
        <View style={{ flexDirection: "row" }}>
            <ChartButton
                text="W"
                onPress={changeGraphView}
            />
            <ChartButton
                text="M"
                onPress={changeGraphView}
            />
        </View>
    )
}