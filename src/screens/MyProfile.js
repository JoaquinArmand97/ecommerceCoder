import { useNavigation } from "@react-navigation/native";
import React from "react";
import { StyleSheet, View, Image, Text, TouchableOpacity } from "react-native";
import { useGetUserQuery } from "../services/userApi";
import { useSelector } from "react-redux";

const MyProfile = () => {
    const navigation = useNavigation();
    const localId = useSelector(state => state.user.localId);
    const { data: user, isLoading } = useGetUserQuery({localId})

    if (isLoading) 
      return (
        <View style={styles.loadingContainer}>
          <Text style={styles.loadingText}>Cargando...</Text>
        </View>
      );

    return (
        <View style={styles.container}>
          <Image 
            source={user?.image ? { uri: user.image } : 
            { uri: "https://i.pinimg.com/550x/57/70/f0/5770f01a32c3c53e90ecda61483ccb08.jpg" }}
            style={styles.image} 
            resizeMode="cover" 
          />
          <Text style={styles.username}>Usuario</Text>

          <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate("ImageSelector")}
          >
            <Text style={styles.buttonText}>Agregar imagen de perfil</Text>
          </TouchableOpacity>

          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate("LocationSelector")}
          >
            <Text style={styles.buttonText}>Actualizar ubicación</Text>
          </TouchableOpacity>
        </View>
    );
};

export default MyProfile;


const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    padding: 20,
  },
  image: {
    width: 120,
    height: 120,
    borderRadius: 60,
    marginBottom: 10,
  },
  username: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 10,
  },
  button: {
    backgroundColor: "#007bff",
    padding: 10,
    borderRadius: 5,
    marginTop: 10,
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
  },
  loadingContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f0f0f0",
  },
  loadingText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#007bff",
  },
});



