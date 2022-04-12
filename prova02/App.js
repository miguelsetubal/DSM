import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, Dimensions} from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <button>
        Clique aqui
      </button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },   
  
});
