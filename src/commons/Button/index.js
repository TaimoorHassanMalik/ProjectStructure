import React from 'react';
import {Text, View, TouchableOpacity, ActivityIndicator} from 'react-native';
import {styles} from './styles';

export const Button = ({title, isLoading, disabled, width, height, color, onPress}) => {
 
  return (
    <View style={styles().spacing}>
    <TouchableOpacity
      style={styles({disabled, width, height, color}).container}
      disabled={!disabled}
      onPress={onPress}>
      {isLoading ? (
        <ActivityIndicator size="small" color="white" />
      ) : (
        <Text style={styles({disabled}).text}>{title}</Text>
      )}
    </TouchableOpacity>
    </View>
  );
};
