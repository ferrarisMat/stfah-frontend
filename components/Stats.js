import React from "react";
import { View, Text, ScrollView, Dimensions } from "react-native";
import { Styles } from '../styles/styles';
import Actions from "../data/actions";
import UserData from "../data/userdata";
import { StyleSheet } from "react-native";

var Device_Width = Dimensions.get('window').width;
const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];

function readableDate (date) {
  let out = '';
  out += date.getFullYear();
  out += '-';
  if ((date.getMonth() + 1) < 10) {
    out += '0';
  }
  out += (date.getMonth() + 1);
  out += '-';
  if (date.getDate() < 10) {
    out += '0';
  }
  out += date.getDate();
  return out;
}

function totalPerDay (data) {
  return 100
}

export default function Chart() {
  var out = {};
  for(let i = 0; i < UserData.length; i++) {
    const date = readableDate(new Date(UserData[i].date));
    if(!out[date]){
      out[date] = [UserData[i]];
    } else {
      out[date].push(UserData[i])
    }
  }
  let days = Object.keys(out).map((key) => {
    return [key, out[key]];
  });

  let blocks = [];
  days.forEach((day, i) => {
    let paddingLeft = 6;
    let paddingRight = 6;
    const when = new Date(day[0]);
    const rows = [];
    day[1].forEach((data, i) => {
      let marginTop = i === 0 ? 0 : 12;
      const value = Actions[data.action].scorePerUnit * data.value;
      rows.push(
        <View style={[{marginTop: marginTop}, OwnStyles.block, OwnStyles.shadow]}>
          <View style={OwnStyles.row}>
            <Text style={[Styles.smallTitle, {color: 'black'}]}>{Actions[data.action].name}</Text>
          </View>
          <View style={[OwnStyles.score]}><Text style={[Styles.smallTitle, {color: value > 0 ? '#8AD879' : '#F3533A'}]}>{value}</Text></View>
        </View>
      )
    });

    const blockWidth = Device_Width - 36
    blocks.push(
      <View style={[OwnStyles.shadow, {paddingLeft: paddingLeft, paddingRight: paddingRight, width: blockWidth, marginRight: i === days.length - 1 ? 36:0 }]}>
        <View style={OwnStyles.dayBlock}>
          <View>
            <Text style={[Styles.body, {color: 'white'}]}>{monthNames[when.getMonth()]} {(when.getDate()<10?'0':'')+when.getDate()}</Text>
          </View>
          <View style={{opacity:0.3, backgroundColor: 'white', height: 1, width: '100%', marginTop: 10, marginBottom: 12}}></View>
          {rows}
        </View>
      </View>
      )
  });

  return(
    <View style={[{ paddingTop: 10, flex: 1 }]}>
      <ScrollView showsHorizontalScrollIndicator={false} contentContainerStyle={{paddingBottom: 50, marginLeft: 18}} snapToInterval={Device_Width - 36} decelerationRate="fast" horizontal={true}>
        {blocks}
      </ScrollView>
    </View>
    )
}

let OwnStyles = StyleSheet.create({
  dayBlock: {
    backgroundColor: '#5ACFC9',
    borderRadius: 4,
    width: '100%',
    paddingLeft: 13,
    paddingRight: 13,
    paddingTop: 6,
    paddingBottom: 15
  },
  row: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 12,
    borderTopLeftRadius: 4,
    borderBottomLeftRadius: 4,
    flex: 1,
    backgroundColor: 'rgba(255,255,255,0.7)'
  },
  score: {
    paddingTop: 16,
    paddingBottom: 20,
    paddingLeft: 12,
    paddingRight: 12,
    width: '20%',
    alignItems: 'flex-end',
    borderTopRightRadius: 4,
    borderBottomRightRadius: 4,
    backgroundColor: 'white'
  },
  block: {
    flexDirection: 'row'
  },
  shadow: {
    flexDirection: 'row',
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 12,
    shadowOpacity: 1
  }
});