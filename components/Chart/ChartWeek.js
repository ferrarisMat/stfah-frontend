import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import { Circle, Path, Defs, LinearGradient, Stop, G, Line, Rect, Text } from 'react-native-svg';
import * as shape from 'd3-shape'
import Actions from "../../data/actions";
import UserData from "../../data/userdata";

// Formatting the date
function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = dd+'/'+mm;
    return date
}

export default class Charts extends React.PureComponent {
    render() {
        // Initiate the array with total points per day
        let totalPointsPerDay = [];
        let lastDay; // Last day of the week
        for (var i=0; i<7; i++) {
            var d = new Date();
            d.setDate(d.getDate() - i);
            totalPointsPerDay[formatDate(d)] = 0;

            if(i === 6) {
                lastDay = formatDate(d);
            }
        }

        // Data from the user
        UserData.forEach((user) => {
            const today = new Date(user.date);
            const day = formatDate(today);
            // If the day is in the interval of the 7 last days
            if((today.getDate() < lastDay.substring(0,2) && today.getMonth() == lastDay.substring(3,5)) || (today.getMonth() < lastDay.substring(3,5))) {
                // If the value of the action is a boolean
                if(Actions[user.action].type === "boolean" && user.value === true) {
                    totalPointsPerDay[day] += Actions[user.action].scorePerUnit;
                }
                else if(Actions[user.action].type === "number" && parseInt(user.value)) {
                    totalPointsPerDay[day] += Actions[user.action].scorePerUnit * user.value;
                }
            }
        });

        // Formatting the array
        const dataArea = [];
        for(const key in totalPointsPerDay) {
            dataArea.push({
                value: totalPointsPerDay[key],
                label: key
            })
        }
        dataArea.reverse();

        // Data for the chart
        const contentInset = { top: 10, bottom: 10 }

        const Decorator = ({ x, y, data }) => {
            return data.map((value, index) => (
                <Circle
                    key={ index }
                    cx={ x(index) }
                    cy={ y(value.value) }
                    r={ 3 }
                    stroke={ 'rgb(250, 159, 66)' }
                    strokeWidth={2}
                    fill={ 'white' }
                />
            ))
        }

        const axesSvg = { fontSize: 10, fill: 'grey' };
        const xAxisHeight = 30

        const Gradient = () => (
            <Defs key={'gradient'}>
                <LinearGradient id={'gradient'} x1={'0'} y={'0%'} x2={'100%'} y2={'0%'}>
                    <Stop offset={'0%'} stopColor={'rgb(250, 159, 66)'}/>
                    <Stop offset={'65%'} stopColor={'rgb(250, 159, 66)'}/>
                    <Stop offset={'100%'} stopColor={'rgb(243, 83, 58)'}/>
                </LinearGradient>
            </Defs>
        )

        /**
         * Both below functions should preferably be their own React Components
         */

        const HorizontalLine = (({ y }) => (
            <Line
                key={ 'zero-axis' }
                x1={ '0%' }
                x2={ '100%' }
                y1={ y(0) }
                y2={ y(0) }
                stroke={ '#FA9F42' }
                strokeWidth={ 1 }
            />
        ))

        return(
            <View style={{ height: 200, flexDirection: 'row', width: 300 }}>
                    <YAxis
                        data={dataArea}
                        style={{ marginBottom: xAxisHeight }}
                        contentInset={contentInset}
                        svg={axesSvg}
                    />
                    <View style={{ flex: 1 }}>
                        <LineChart
                            data={dataArea}
                            contentInset={contentInset}
                            style={{ flex: 1, height: 200 }}
                            svg={{ stroke: 'url(#gradient)' , strokeWidth: 2 }}
                            yAccessor={({ item }) => item.value}
                        >
                            <Grid />
                            <Decorator/>
                            <Gradient/>
                            <HorizontalLine/>
                        </LineChart>
                        <XAxis
                            style={{ height: xAxisHeight }}
                            data={dataArea}
                            formatLabel={(value) => value}
                            contentInset={{ contentInset }}
                            svg={axesSvg}
                            yAccessor={({ index }) => index}
                            formatLabel={(_, index) => dataArea[ index ].label}
                        />
                    </View>
                </View>
        )
    }
}