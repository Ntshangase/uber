import { StyleSheet, Text, View } from 'react-native';
import { Provider } from 'react-redux';

//set-up redux

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Uber under construction</Text>
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
