import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { LineChart, Grid, YAxis, XAxis } from 'react-native-svg-charts';
import { Circle, Path, Defs, LinearGradient, Stop, G, Line, Rect, Text } from 'react-native-svg';
import * as shape from 'd3-shape'

export default class Chart extends React.PureComponent {
    render() {
        // Data for the chart
        const contentInset = { top: 10, bottom: 10, left: 10, right: 10 }

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

        const axesSvg = { fontSize: 9, fill: 'grey' };
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
            <View style={{ flex:1,height: 200, flexDirection: 'row', width: 300 }}>
                    <YAxis
                        data={this.props.chartData}
                        style={{ marginBottom: xAxisHeight, flex: 1 }}
                        contentInset={contentInset}
                        svg={axesSvg}
                        yAccessor={({ item }) => item.value}
                    />
                    <View style={{ width: "90%" }}>
                        <LineChart
                            data={this.props.chartData}
                            contentInset={contentInset}
                            style={{ flex: 1, height: 200, width: '100%' }}
                            svg={{ stroke: 'url(#gradient)' , strokeWidth: 2 }}
                            yAccessor={({ item }) => item.value}
                        >
                            <Grid />
                            <Decorator/>
                            <Gradient/>
                            <HorizontalLine/>
                        </LineChart>
                        <XAxis
                            style={{ height: xAxisHeight, widht: '40%' }}
                            data={this.props.chartData}
                            formatLabel={(value) => value}
                            contentInset={{ contentInset }}
                            svg={axesSvg}
                            yAccessor={({ index }) => index}
                            formatLabel={(_, index) => this.props.chartData[ index ].label}
                        />
                    </View>
                </View>
        )
    }
}