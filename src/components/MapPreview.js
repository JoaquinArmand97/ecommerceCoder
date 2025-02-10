import { StyleSheet, Text, View, ImageBackground } from 'react-native';
import React from 'react';
import { googleapi } from '../googleApi';

const MapPreview = ({ location }) => {
  const mapStaticUrl = `https://maps.googleapis.com/maps/api/staticmap?center=${location.lat},${location.lng}&zoom=13&size=600x300&maptype=roadmap&markers=color:blue%7Clabel:S%7C${location.lat},${location.lng}&key=${googleapi}`;

  return (
    <View>
       
      {location.lat && (
        <ImageBackground
          source={{ uri: mapStaticUrl }}
          style={styles.image}
        >
          <Text style={styles.text}>Mapa cargado</Text>
        </ImageBackground>
      )}
    </View>
  );
};

export default MapPreview;

const styles = StyleSheet.create({
  image: {
    width: 300,
    height: 300,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'grey',
  },
  text: {
    color: 'white',
    fontWeight: 'bold',
  },
});
