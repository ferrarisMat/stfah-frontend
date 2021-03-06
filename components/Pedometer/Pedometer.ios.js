import React, { Component } from "react";
import { Pedometer } from "expo-sensors";
import { Text, View, StyleSheet } from "react-native";
import { Styles } from '../../styles/styles';

export default class IOSPedometer extends Component<{}> {
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

  getFeedbackMessage = () => {
    const steps = this.state.pastStepCount;

    if (steps < 1000) return 'You barely moved at all today ! Good job, keep going.'
    if (steps < 5000) return 'That\'s a lot of steps. Slow down, cowboy.'
    if (steps < 10000) return 'You\'re moving a lot. Are you alright ?'
    return 'What are you doing ? You don\'t really get this do you ?'
  };

  render() {
    return (
      <View style={styles.card}>
        <Text style={[Styles.smallTitle, {color: 'white'}]}>ℹ️ Daily steps</Text>
        <View style={{opacity:0.3, backgroundColor: 'white', height: 1, width: '100%', marginTop: 10, marginBottom: 12}}></View>
        <Text style={[Styles.bodyLarge, {color: 'white'}]}>
        You took {this.state.pastStepCount} steps in the last 24 hours. {this.getFeedbackMessage()}
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  card: {
    paddingLeft: 10,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 4,
    backgroundColor: "#8AD879",
    fontSize: 14,
    shadowColor: 'rgba(0,0,0,0.2)',
    shadowOffset: { width: 0, height: 16 },
    shadowRadius: 12,
    shadowOpacity: 1
  }
})