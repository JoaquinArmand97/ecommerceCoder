import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';

const SubmitButton = ({ title = "Submit", onPress }) => {
  return (
    <TouchableOpacity style={styles.button} onPress={onPress}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
};

export default SubmitButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#007BFF', 
    paddingVertical: 15, 
    paddingHorizontal: 30, 
    borderRadius: 5, 
    alignItems: 'center', 
    marginVertical: 10, 
    width: '100%', 
  },
  buttonText: {
    color: '#fff', 
    fontSize: 16, 
    fontWeight: 'bold', 
  },
});
