import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import FontAwesome from '@expo/vector-icons/FontAwesome';

const TabBarIcon = ({text, icon}) => {
  return (
    <View style={styles.container}>
      <FontAwesome name={icon} size={28} color="white" />
      <Text style={styles.text}>{text}</Text>
    </View>
  )
}

export default TabBarIcon

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column', 
    alignItems: 'center',
    justifyContent: 'center', 
    width: 50, 
  },
  text: {
    color: "white",
    marginLeft: 5, 
  }
})
