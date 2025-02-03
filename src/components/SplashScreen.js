import React, { useEffect, useRef } from 'react';
import { View, Animated, StyleSheet } from 'react-native';

const SplashScreen = ({ onFinish }) => {
  const translateY = useRef(new Animated.Value(0)).current; // Valor inicial para la animación

  useEffect(() => {
    // Configurar el bucle de animación
    const animation = Animated.loop(
      Animated.sequence([
        Animated.timing(translateY, {
          toValue: -10, // Mover hacia arriba
          duration: 1000, // Duración de la animación
          useNativeDriver: true,
        }),
        Animated.timing(translateY, {
          toValue: 10, // Mover hacia abajo
          duration: 1000, // Duración de la animación
          useNativeDriver: true,
        }),
      ])
    );
    animation.start();

    // Timer para finalizar el SplashScreen
    const timer = setTimeout(() => {
      onFinish(); // Notificar que el splash terminó
    }, 3000); // Duración en milisegundos

    return () => {
      clearTimeout(timer);
      animation.stop(); // Detener la animación si el componente se desmonta
    };
  }, [onFinish, translateY]);

  return (
    <View style={styles.container}>
      <Animated.Image
        source={{
          uri: 'https://i.pinimg.com/originals/05/b7/03/05b703c9d6d3810d28ba9375e9572a38.png',
        }}
        style={[
          styles.logo,
          { transform: [{ translateY }] }, // Aplicar transformación para el movimiento
        ]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#0cb7f2', // Color de fondo
  },
  logo: {
    width: 150,
    height: 150, // Ajustar dimensiones del logo
    resizeMode: 'contain',
  },
});

export default SplashScreen;

