import React from "react";
// Android
// import { Pedometer } from "expo-legacy";
import { Pedometer } from "expo-sensors";
import { StyleSheet, Text, View } from "react-native";
import Navigation from "../components/Navigation";

export default class App extends React.Component {
  state = {
    isPedometerAvailable: "checking",
    pastStepCount: 0,
    currentStepCount: 0,
  };

  componentDidMount() {
    this._subscribe();
  }

  componentWillUnmount() {
    this._unsubscribe();
  }

  _subscribe = () => {
    this._subscription = Pedometer.watchStepCount((result) => {
      this.setState({
        currentStepCount: result.steps,
      });
    });

    Pedometer.isAvailableAsync().then(
      (result) => {
        this.setState({
          isPedometerAvailable: String(result),
        });
      },
      (error) => {
        this.setState({
          isPedometerAvailable: "Could not get isPedometerAvailable: " + error,
        });
      }
    );

    const end = new Date();
    const start = new Date();
    start.setDate(end.getDate() - 1);
    Pedometer.getStepCountAsync(start, end).then(
      (result) => {
        this.setState({ pastStepCount: result.steps });
      },
      (error) => {
        this.setState({
          pastStepCount: "Could not get stepCount: " + error,
        });
      }
    );
  };

  _unsubscribe = () => {
    this._subscription && this._subscription.remove();
    this._subscription = null;
  };

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={{ color: "blue" }}>Hello Louis 👋🏻</Text>
          <Text style={{ color: "blue" }}>
            Pedometer.isAvailableAsync(): {this.state.isPedometerAvailable}
          </Text>
          <Text style={{ color: "blue" }}>
            Steps taken in the last 24 hours: {this.state.pastStepCount}
          </Text>
          <Text style={{ color: "blue" }}>
            Walk! And watch this go up: {this.state.currentStepCount}
          </Text>
        </View>
        <Navigation navigation={this.props.navigation} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 15,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "pink",
  },
});
