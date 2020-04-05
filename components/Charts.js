import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import ChartWeek from "../components/Chart/ChartWeek";
import ChartMonth from "../components/Chart/ChartMonth";
import ChartButtons from "../components/Chart/ChartButtons";

 export default class Charts extends React.PureComponent {
    render() {
        return(
            <View>
                <ChartButtons />
                <View style={{ height: 200, flexDirection: 'row', width: 300 }}>
                    <ChartWeek />
                    <ChartMonth />
                </View>
            </View>
        )
    }
}