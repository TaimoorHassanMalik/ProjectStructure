import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const ComponentA = () => {
  return (
    <View style={styles.container}>
      <Text>ComponentA</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {},
});
