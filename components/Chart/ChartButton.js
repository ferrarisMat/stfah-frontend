import React from "react";
import { Button, View, TouchableOpacity, Text, StyleSheet } from "react-native";

export default function(props) {

    return(
        <TouchableOpacity onPress={props.onPress} style={[styles.button, props.isSelected && { backgroundColor: '#FFFFFF', shadowColor: "#000", shadowOffset: { width: 0, height: 7, }, shadowOpacity: 0.2, shadowRadius: 9.51, elevation: 4, }]}> 
            <Text style={styles.text}>
                {props.text}
            </Text>
        </TouchableOpacity >
    )
}

const styles = StyleSheet.create({
    button: {
        width: '50%',
        padding: 8,
        borderRadius: 4
    },
    text: {
        width: '100%',
        textAlign: 'center'
    }
});