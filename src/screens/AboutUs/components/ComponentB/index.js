import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ComponentB = () => {
  return (
    <View style={styles.container}>
      <Text>ComponentB</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
