import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import AuthStack from '../navigation/AuthStack'
import { useSelector } from 'react-redux'
import TabNavigator from './TabNavigator'

const Tab = createBottomTabNavigator();

const Navigator = () => {

    const idToken = useSelector (state => state.user.idToken)

  return (
    
    <NavigationContainer>

       {idToken ? <TabNavigator/> :  <AuthStack/>}
       
    </NavigationContainer>
 
  )
}

export default Navigator

const styles = StyleSheet.create({})