import { StyleSheet, Text, View } from 'react-native'
import React from 'react'


const TextPrimary = ({ style, children }) => {
    return <Text style={[styles.text, style]}>{children}</Text>;
  };

export default TextPrimary

const styles = StyleSheet.create({

    text: {
        fontSize: 16
    }
})