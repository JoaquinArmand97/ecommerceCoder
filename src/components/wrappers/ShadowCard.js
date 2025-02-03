import { StyleSheet, View } from 'react-native'
import React from 'react'

const ShadowCard = ({children, style}) => {
  return (
    <View style= {[style, styles.container]}>
      {children}
    </View>
  )
}

export default ShadowCard

const styles = StyleSheet.create({

    container: {
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
    },
        shadowOpacity: 0.34,
        shadowRadius: 6.27,

        elevation: 10,
    }

})