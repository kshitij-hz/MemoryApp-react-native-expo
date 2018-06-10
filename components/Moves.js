// Score.js
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
 
export default class Moves extends React.Component {
   
  render() {
    return (
      <View style={styles.moves_container}>
        <Text style={styles.moves}>Moves: {this.props.moves}</Text>
      </View>
    );
  }
 
}
 
const styles = StyleSheet.create({
  moves_container: {
    flex: 1,
    backgroundColor: '#CEC8C6',
    alignItems: 'center',
    padding: 10
  },
  moves: {
    fontSize: 20,
    fontWeight: 'bold'
  }
});
