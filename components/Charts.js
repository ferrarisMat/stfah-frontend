import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import ChartWeek from "../components/Chart/ChartWeek";
import ChartMonth from "../components/Chart/ChartMonth";

 export default class Charts extends React.PureComponent {
    render() {
        return(
            <View style={{ height: 200, width: 300 }}>
                <View style={{ flex: 'row' }}>
                    
                </View>
                <ChartWeek />
                <ChartMonth />
            </View>
        )
    }
}