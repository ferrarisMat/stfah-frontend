import React from "react";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";
import ChartButton from '../Chart/ChartButton';

export default function(props) {

    return (
        <View style={{ flexDirection: "row", backgroundColor: '#F4F4F4', padding: 1, borderRadius: 4, marginTop: 20 }}>
            <ChartButton
                text="Week"
                onPress={() => {
                    props.updateMonth(false);
                    props.updateWeek(true);
                }}
                isSelected={props.isWeek}
            />
            <ChartButton
                text="Month"
                onPress={() => {
                    props.updateMonth(true);
                    props.updateWeek(false);
                }}
                isSelected={props.isMonth}
            />
        </View>
    )
}