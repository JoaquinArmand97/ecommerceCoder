import { StatusBar } from 'expo-status-bar';
import { StyleSheet , SafeAreaView,  } from 'react-native';
import React, { useState } from 'react';
import { useFonts } from 'expo-font';
import SplashScreen from './src/components/SplashScreen';
import { fonts } from './src/global/fonts';
import Navigator from './src/navigation/Navigator';
import { Provider } from 'react-redux';
import {store} from './src/store';
import Login from './src/screens/Login';
import SingUp from './src/screens/SignUp';


export default function App () {

    const [isLoading, setIsLoading] = useState(true);
    const [fontsLoaded] = useFonts(fonts)

    const handleFinish = () => {
        setIsLoading(false);
      };

    if (isLoading) {
      return <SplashScreen onFinish={handleFinish} />;
    }

    if (!fontsLoaded) {
      return null;
    }


  return (


   
    <SafeAreaView style={styles.container}>
      <Provider store={store}>
      <Navigator/>
      </Provider>
      <StatusBar />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
   flex: 1
   
  }
});
