import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

function App(): React.JSX.Element {
  return (
    <View style={styles.Container}>
      <Text>Start app Caloric balance</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  Container: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;
