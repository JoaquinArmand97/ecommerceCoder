import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import ShopStack from './ShopStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CartStack from './CartStack';
import Orders from './Orders';
import TabBarIcon from '../components/TabBarIcon';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import MyProfile from '../screens/MyProfile';
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faUser } from "@fortawesome/free-regular-svg-icons";
import MyProfileStack from '../navigation/MyProfileStack';



const Tab = createBottomTabNavigator();


const TabNavigator = () => {


  return (
   
        <Tab.Navigator
            screenOptions={{
                headerShown:false,
                tabBarShowLabel: false,
                tabBarStyle: styles.tabBar,
                tabBarLabelPosition: "beside-icon"
            }}>


            <Tab.Screen 
            name="CartStack"
            component={CartStack}
            options={{
                tabBarIcon: ({focused}) => <TabBarIcon text="Tienda" icon= "shopping-cart" focused={focused}/>
            }}
            />
            <Tab.Screen 
            name="ShopStack" 
            component={ShopStack}
            options={{
                
                tabBarIcon: ({focused}) => <TabBarIcon text="Carrito"  icon= "shopping-basket" focused={focused}/>
            }}
            
            />
          
            <Tab.Screen 
            name="Orders" 
            component={Orders}
            options={{
                tabBarIcon: ({focused}) => <TabBarIcon text="Orders"  icon= "reorder" focused={focused}/>
            }}
            />

            <Tab.Screen 
             name="MyProfileStack" 
             component={MyProfileStack}
             options={{
               tabBarIcon: ({ focused }) => (
                 <FontAwesomeIcon icon={faUser} size={28} color={focused ? "#007bff" : "#999"} />
                )
            }}
            />

        </Tab.Navigator>
     
  )
}


const styles = StyleSheet.create({
    tabBar: {
        height: 60,
        backgroundColor: "#14233d",
        paddingHorizontal: 20,
    },
  });
  

export default TabNavigator

