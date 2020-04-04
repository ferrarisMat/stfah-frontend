import React from "react";
import { Dimensions } from "react-native";
import { LineChart } from "react-native-chart-kit";

export default function Chart() {
    // Data for the chart
    const data = {
        labels: ["30/04", "31/03", "01/04", "02/04", "03/04", "04/04"],
        datasets: [
            {
                data: [
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100,
                Math.random() * 100
                ]
            }
        ]
    }
    // Configuration object for the chart
    const chartConfig = {
        backgroundColor: "#e26a00",
        backgroundGradientFrom: "#fb8c00",
        backgroundGradientTo: "#ffa726",
        decimalPlaces: 2, // optional, defaults to 2dp
        color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        propsForDots: {
            r: "6",
            strokeWidth: "2",
            stroke: "#ffa726"
        }
    }
    const chartStyle = {
        marginVertical: 8,
    }

    return(
        <LineChart
            data={data}
            width={Dimensions.get("window").width} // from react-native
            height={220}
            yAxisInterval={1} // optional, defaults to 1
            chartConfig={chartConfig}
            style={chartStyle}
        />
    )
}