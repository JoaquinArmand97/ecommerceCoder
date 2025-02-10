import { StyleSheet, Text, View, Alert } from 'react-native'
import React, { useEffect, useState } from 'react'
import SubmitButton from '../components/SubmitButton'
import MapPreview from '../components/MapPreview'
import * as Location from 'expo-location';
import { googleapi } from '../googleApi';
import { useSelector } from 'react-redux';
import { usePatchLocationMutation } from '../services/userApi';
import { useNavigation } from '@react-navigation/native';


const LocationSelector = () => {

  const navigation = useNavigation()
  const localId = useSelector(state => state.user.localId)
  const [triggerLocation] = usePatchLocationMutation()
  const [address, setAddress] = useState("")
  const [location, setLocation] = useState(null) 

  useEffect(() => {
    const getLocation = async () => {
      try {
        const { status } = await Location.requestForegroundPermissionsAsync();
        if (status !== "granted") {
          Alert.alert("Permiso denegado", "Necesitamos acceso a tu ubicación para continuar.");
          return;
        }

        const newLocation = await Location.getCurrentPositionAsync({
          accuracy: Location.Accuracy.High, 
        });

        const newCoords = {
          lat: newLocation.coords.latitude,
          lng: newLocation.coords.longitude
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

  useEffect(() => {
    (async () => {
      if (location.lat) {
        const urlReverseGeocoding = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${googleapi}`;
        const response = await fetch(urlReverseGeocoding);
        const data = await response.json();
        setAddress(data.result[0].formatted_address)
      }
    })(); 
  }, [location]); 
  

  const handlerConfrimLocation = () => {

    triggerLocation({localId,address,location })
    navigation.navigate("MyProfile")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Direccion: {address}</Text>
      {location ? <MapPreview location={location} /> : <Text>Cargando mapa...</Text>}
      <SubmitButton title="Confirmar Ubicación" onPress={handlerConfrimLocation} />
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
