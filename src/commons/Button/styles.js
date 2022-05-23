import {StyleSheet} from 'react-native';

export const styles = ({disabled, width, height, color} = {}) =>
  StyleSheet.create({
    spacing: {
      alignItems: 'center',
      marginTop: 10,
      marginBottom: 10,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: -666,
      backgroundColor: !disabled ? 'lightgray' : color ? color : '#2887ef',
      width: width ? width : 250,
      height: height ? height : 35,
      borderRadius: 8,
    },
    text: {
      color: 'white',
    },
  });
