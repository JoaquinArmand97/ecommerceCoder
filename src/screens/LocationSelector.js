import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import MapPreview from '../components/MapPreview'
import * as Location from 'expo-location';

const LocationSelector = () => {
  const [address, setAddress] = useState("")
  const [location, setLocation] = useState(null) // Inicializar como null

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permiso denegado", "Necesitamos acceso a tu ubicación para continuar.");
          return;
        }

        const newLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High, // Mejor precisión
        });

        const newCoords = {
          lat: newLocation.coords.latitude,
          long: newLocation.coords.longitude
        };

        setLocation(newCoords);
        console.log("Ubicación obtenida:", newCoords);
      } catch (error) {
        Alert.alert("Error", "No se pudo obtener la ubicación.");
        console.error(error);
      }
    };

    getLocation();
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.text}>LocationSelector {address}</Text>
      {location ? <MapPreview location={location} /> : <Text>Cargando mapa...</Text>}
      <SubmitButton title="Confirmar Ubicación" onPress={() => {}} />
    </View>
  );
};

export default LocationSelector;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  text: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
});
