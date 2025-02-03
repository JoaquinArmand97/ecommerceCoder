import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Header from '../components/Header';
import Login from '../screens/Login';
import SignUp from '../screens/SignUp';

const Stack = createNativeStackNavigator();

const AuthStack = () => {
  return ( 
    <Stack.Navigator
      screenOptions={({ route }) => ({
        header: () => (
          <Header 
            title={
              route.name === "Login" ? "Iniciar Sesión" : 
              route.name === "SignUp" ? "Registrarse" : ""
            }
          />
        )
      })}
    >
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="SignUp" component={SignUp} />
    </Stack.Navigator>
  );
};

export default AuthStack;
