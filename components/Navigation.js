import React, { Component } from "react";
import { StyleSheet, Button, View, TouchableOpacity, Text } from "react-native";

export const navigationRef = React.createRef();


export class Navigation extends Component<{}> {
  state = {
    activeRoute: 'Home'
  };

  updateNav (name) {
    this.setState({
      activeRoute: name
    });
    navigationRef.current.navigate(name);
  }

  returnHome() {
    if (this.state.activeRoute === 'Actions'){
      return <TouchableOpacity style={styles.buttonHome} onPress={() => this.updateNav('Home')}>
        <Text style={styles.buttonHomeText}>{"<"} Home</Text>
      </TouchableOpacity>
    }
  }


  render() {
    return (
      <View style={styles.container} pointerEvents="box-none">
        {
          this.returnHome()
        }
        <TouchableOpacity style={styles.buttonPlus} onPress={() => this.updateNav('Actions')}>
          <Text style={styles.buttonText}>➕</Text>
        </TouchableOpacity>
      </View>
  )};
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
  buttonPlus: {
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor: "white",
    lineHeight: 60,
    position: "absolute",
    bottom: 0,
    marginLeft: -30,
    left: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#222',
    shadowOffset: { width: 0, height: 0 },
    shadowOpacity: 0.5,
    shadowRadius: 10
  },
  buttonHome: {
    margin: 10,
    position: "absolute",
    top: 0,
    left: 0,
    width: '100%'
  },
  buttonHomeText: {
    fontSize: 20,
    color: '#666'
  },
  buttonText: {
    fontSize: 30
  },
});
