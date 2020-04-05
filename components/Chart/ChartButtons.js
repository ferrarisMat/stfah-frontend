import React, { useState } from "react";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ChartButton from '../Chart/ChartButton';

export default function() {
    // Variable to control the selected state of the buttons
    const [isWeek, updateWeek] = useState(true);
    const [isMonth, updateMonth] = useState(false);

    const changeGraphView = function() {
        console.log('ok');
    }

    return (
        <View style={{ flexDirection: "row", backgroundColor: '#F4F4F4', padding: 1, borderRadius: 4 }}>
            <ChartButton
                text="W"
                onPress={() => {
                    updateMonth(false);
                    updateWeek(true);
                    changeGraphView;
                }}
                isSelected={isWeek}
            />
            <ChartButton
                text="M"
                onPress={() => {
                    updateMonth(true);
                    updateWeek(false);
                    changeGraphView;
                }}
                isSelected={isMonth}
            />
        </View>
    )
}