import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import ProductDetail from '../screens/ProductDetail';
import Header from '../components/Header';
import ProductsByCategory from '../screens/ProductsByCategory';
const Stack = createNativeStackNavigator()

const CartStack = () => {

    return ( <Stack.Navigator
        screenOptions={({route})=> ({
            header: ()=> {

    return <Header title="Scaloneta"  />
           
      }
    })}
  >
    <Stack.Screen name="Home" component={Home}/>
    <Stack.Screen name="ProductsByCategory" component={ProductsByCategory}/>
    <Stack.Screen name="ProductDetail" component={ProductDetail}/>

  </Stack.Navigator>
  
  )
}

export default CartStack

