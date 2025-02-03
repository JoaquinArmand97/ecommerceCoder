import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import MyProfile from '../screens/MyProfile';
import ImageSelector from '../screens/ImageSelector';
import Header from '../components/Header';
import LocationSelector from '../screens/LocationSelector';


const Stack = createNativeStackNavigator()

const MyProfileStack = () => {
  return (
    <Stack.Navigator
    screenOptions={({route})=> ({
        header: () => {
        return <Header title="Perfil"/>
        }
    })}
    >
        <Stack.Screen name='MyProfile' component={MyProfile}/>
        <Stack.Screen name='ImageSelector' component={ImageSelector}/>
        <Stack.Screen name='LocationSelector' component={LocationSelector}/>
      
    </Stack.Navigator>
  )
}

export default MyProfileStack