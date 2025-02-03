import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Orders from './Orders';
import Header from '../components/Header';

const MyStack = createNativeStackNavigator();

const OrdersStack = () => {
  return (
    <MyStack.Navigator
      screenOptions={({ route }) => ({
        header: () => {
          return <Header title="Ordenes"  />;
        },
      })}
    >
      <MyStack.Screen name="Orders" component={Orders} />
    </MyStack.Navigator>
  );
};

export default OrdersStack;
