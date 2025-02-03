import { StyleSheet, Text, View } from 'react-native'
import Cart from '../screens/Cart';
import { createNativeStackNavigator } from '@react-navigation/native-stack';


const ShopStack = () => {


     const Stack = createNativeStackNavigator()

  return (
    <Stack.Navigator>
        <Stack.Screen name='Cart' component={Cart}/>
   </Stack.Navigator>
  )
}

export default ShopStack

const styles = StyleSheet.create({})