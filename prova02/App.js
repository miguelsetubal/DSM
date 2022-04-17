import { View, Text, StyleSheet } from 'react-native';
import { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center',
      }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'pink' }}>
          <Text style={styles.styleText}>Box 1</Text>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'grey' }}>
          <Text style={styles.styleText}>Box 2</Text>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
          <Text style={styles.styleText}>Box 3</Text>
        </View>
      </View>
    );
  }
};

const styles = StyleSheet.create({
  styleText: {
    textAlign: "center",
    marginTop: 40
  },
});