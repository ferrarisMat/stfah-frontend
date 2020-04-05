import React from "react";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ChartButton from '../Chart/ChartButton';

export default function(props) {

    return (
        <View style={{ flexDirection: "row", backgroundColor: '#F4F4F4', padding: 1, borderRadius: 4 }}>
            <ChartButton
                text="W"
                onPress={() => {
                    props.updateMonth(false);
                    props.updateWeek(true);
                    props.changeGraphView;
                }}
                isSelected={isWeek}
            />
            <ChartButton
                text="M"
                onPress={() => {
                    props.updateMonth(true);
                    props.updateWeek(false);
                    props.changeGraphView;
                }}
                isSelected={isMonth}
            />
        </View>
    )
}