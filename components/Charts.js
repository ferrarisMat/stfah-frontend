import React, { useState } from "react";
import { Dimensions, View, StyleSheet } from "react-native";
import Chart from "../components/Chart/Chart";
import ChartButtons from "../components/Chart/ChartButtons";

import Actions from "../data/actions";
import UserData from "../data/userdata";

// Data arrays
let totalPointsPerDay = {};
let lastDay; // Last day of the week
const currentMonth = (new Date()).getMonth()+1; // The current month
const chartData = [];

// Variable to control which kind of chart is represented
const [isWeek, updateWeek] = useState(true);
const [isMonth, updateMonth] = useState(false);

const changeGraphView = function() {
    console.log('ok');
}

// Formatting the date
function formatDate(date){
    var dd = date.getDate();
    var mm = date.getMonth()+1;
    if(dd<10) {dd='0'+dd}
    if(mm<10) {mm='0'+mm}
    date = dd+'/'+mm;
    return date
}

function initiateArrayDataWeek(array) {
    // Initiate the array with total points per day
    for (var i=0; i<7; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        array[formatDate(d)] = 0;

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
                array[day] += Actions[user.action].scorePerUnit;
            }
            else if(Actions[user.action].type === "number" && parseInt(user.value)) {
                array[day] += Actions[user.action].scorePerUnit * user.value;
            }
        }
    });

    return array;
}

function initiateArrayDataMonth(array) {
    array = {};
    for (var i=0; i<31; i++) {
        var d = new Date();
        d.setDate(d.getDate() - i);
        if(d.getMonth()+1 !== currentMonth) break;
        array[formatDate(d)] = 0;
    }

    // Data from the user
    UserData.forEach((user) => {
        const today = new Date(user.date);
        const day = formatDate(today);
        // If the day is in the interval of the current month
        if(today.getMonth()+1 === currentMonth) {
            console.log(user);
            // If the value of the action is a boolean
            if(Actions[user.action].type === "boolean" && user.value === true) {
                array[day] += Actions[user.action].scorePerUnit;
            }
            else if(Actions[user.action].type === "number" && parseInt(user.value)) {
                array[day] += Actions[user.action].scorePerUnit * user.value;
            }
        }
    });

    return array;
}

function FormatDataArray(array) {
    // Formatting the array
    for(const key in totalPointsPerDay) {
        array.push({
            value: totalPointsPerDay[key],
            label: key
        })
    }
    return array.reverse();
}

 export default function() {
        if(isWeek) {
            chartData = FormatDataArray(initiateArrayDataWeek(totalPointsPerDay));

            return(
                <View>
                    <ChartButtons 
                        isWeek={isWeek}
                        updateWeek={updateWeek}
                        isMonth={isMonth}
                        updateMonth={updateMonth}
                        changeGraphView={changeGraphView}
                    />
                    <View style={{ height: 200, flexDirection: 'row', width: 300 }}>
                        <Chart 
                            chartData={chartData}
                        />
                    </View>
                </View>
            )
        }
        else if(isMonth) {
            chartData = FormatDataArray(initiateArrayDataMonth(totalPointsPerDay));

            return(
                <View>
                    <ChartButtons 
                        isWeek={isWeek}
                        updateWeek={updateWeek}
                        isMonth={isMonth}
                        updateMonth={updateMonth}
                        changeGraphView={changeGraphView}
                    />
                    <View style={{ height: 200, flexDirection: 'row', width: 300 }}>
                        <Chart 
                            chartData={chartData}
                        />
                    </View>
                </View>
            )
        }
    }