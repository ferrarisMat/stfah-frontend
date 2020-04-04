import React from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import { AreaChart, Grid } from 'react-native-svg-charts'
import * as shape from 'd3-shape'
import Actions from "../data/actions";
import UserData from "../data/userdata";

// Formatting the date
function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = dd+'/'+mm;
    return date
 }

 export default class Chart extends React.PureComponent {
    render() {
    // Initiate the array with total points per day
    let days = [];
    let TotalPointsPerDay = {};
    let lastDay; // Last day of the week
    for (var i=0; i<7; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        TotalPointsPerDay[formatDate(d)] = 0;
        days.push(formatDate(d));

        if(i === 6) {
            lastDay = formatDate(d);
        }
    }
    days.reverse();

    // Data from the user
    UserData.forEach((user) => {
        const today = new Date(user.date);
        const day = formatDate(today);
        // If the day is in the interval of the 7 last days
        if((today.getDate() < lastDay.substring(0,2) && today.getMonth() == lastDay.substring(3,5)) || (today.getMonth() < lastDay.substring(3,5))) {
            // If the value of the action is a boolean
            if(Actions[user.action].type === "boolean" && user.value === true) {
                TotalPointsPerDay[day] += Actions[user.action].scorePerUnit;
            }
            else if(Actions[user.action].type === "number" && parseInt(user.value)) {
                TotalPointsPerDay[day] += Actions[user.action].scorePerUnit * user.value;
            }
        }
    });

    // Data for the chart
    const dataArea = [
        TotalPointsPerDay[days[0]],
        TotalPointsPerDay[days[1]],
        TotalPointsPerDay[days[2]],
        TotalPointsPerDay[days[3]],
        TotalPointsPerDay[days[4]],
        TotalPointsPerDay[days[5]],
        TotalPointsPerDay[days[6]]
    ]

    return(
        <AreaChart
                style={{ height: 200 }}
                data={dataArea}
                animate={true}
                contentInset={{ top: 30, bottom: 30 }}
                curve={shape.curveNatural}
                svg={{ fill: 'rgba(134, 65, 244, 0.8)' }}
        >
                <Grid />
        </AreaChart>
    )
    }
}

const styles = StyleSheet.create({
    container: {
      borderTopWidth: 0.5,
      borderTopColor: 'rgba(0, 0, 0, .7)',
      borderRightWidth: 0.5,
      borderRightColor: 'rgba(0, 0, 0, .7)'
    }
  });