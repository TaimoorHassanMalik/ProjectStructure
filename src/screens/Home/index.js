import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Example1, Example2} from './components';

export const Home = () => {
  return (
    <View style={styles.container}>
      <Example1 />
      <Example2 />
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
