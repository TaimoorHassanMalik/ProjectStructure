import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Home} from '@screens';

const App = () => {
  return (
    <View style={styles.container}>
      <Home />
      <Text>App</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default App;
