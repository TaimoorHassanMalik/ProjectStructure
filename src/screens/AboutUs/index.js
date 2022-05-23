import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {ComponentA, ComponentB} from './components';

export const AboutUs = () => {
  return (
    <View style={styles.container}>
      <ComponentA />
      <ComponentB />
      <Text>AboutUs</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
