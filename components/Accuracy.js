// Accuracy.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default class Accuracy extends React.Component {
   
  render() {
    return (
      <View style={styles.score_container}>
        <Text style={styles.score}>Accuracy: {this.props.moves == 0 ? 0 : parseFloat(this.props.score / this.props.moves * 100).toFixed(2)}%</Text>
      </View>
    );
  }
 
}
 
const styles = StyleSheet.create({
  score_container: {
    flex: 1,
    backgroundColor: '#CEC8C6',
    alignItems: 'center',
    padding: 10
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
