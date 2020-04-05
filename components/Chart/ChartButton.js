import React from "react";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function(props) {
    return(
        <TouchableOpacity onPress={props.changeGraphView} style={styles.button}> 
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    container: {
      borderRadius: 4,
      borderWidth: 0.5,
      borderColor: '#d6d7da',
    },
    button: {
        width: '50%'
    },
    text: {
        width: '100%',
        textAlign: 'center'
    }
});