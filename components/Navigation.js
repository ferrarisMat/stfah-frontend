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
      <View style={styles.container}>
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
    flex: 1,
    flexDirection: "row",
    justifyContent: 'space-between',
    position: "absolute",
    top: 0,
    right: 0,
    left: 0
  },
  buttonPlus: {
    marginLeft: 'auto',
    width: 60,
    height: 60,
    margin: 10,
    borderRadius: 30,
    backgroundColor: "#F3533A",
    lineHeight: 60,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center'
  },
  buttonHome: {
    margin: 10,
  },
  buttonHomeText: {
    fontSize: 20,
    color: '#666'
  },
  buttonText: {
    color: 'red'
  },
});
