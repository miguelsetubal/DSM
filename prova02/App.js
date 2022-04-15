import { StatusBar } from 'expo-status-bar';
import { View, Text } from 'react-native';
import { Component } from 'react';

export default class App extends Component {

  render() {
    return (
      <View style={{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-around',
        alignItems: 'center'  
      }}>
        <View style={{ width: 100, height: 100, backgroundColor: 'pink' }}>
          
          <Text style={{textAlign: "center"}}>Box 1</Text>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'grey' }}>
        <Text style={{textAlign: "center"}}>Box 2</Text>
        </View>
        <View style={{ width: 100, height: 100, backgroundColor: 'orange' }}>
        <Text style={{textAlign: "center"}}>Box 3</Text>
        </View>

      </View>

    );
  }
};