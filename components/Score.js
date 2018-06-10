// Score.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default class Score extends React.Component {
   
  render() {
    return (
      <View style={styles.score_container}>
        <Text style={styles.score}>Score: {this.props.score}</Text>
      </View>
    );
  }
 
}
 
const styles = StyleSheet.create({
  score_container: {
    flex: 1,
    backgroundColor: '#EBEBEB',
    alignItems: 'center',
    padding: 10
  },
  score: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
