import { StyleSheet, View, Image, Text } from 'react-native'
import SubmitButton from '../components/SubmitButton'
import * as ImagePicker from 'expo-image-picker'
import { useState } from 'react'
import { usePatchImageProfileMutation } from '../services/userApi'
import { useSelector } from 'react-redux'
import { useNavigation } from '@react-navigation/native'
import MyProfile from '../screens/MyProfile'

const ImageSelector = () => {

    const localId = useSelector(state => state.user.localId)
    const [image, setImage] = useState("")
    const [triggerAddImageProfile, { isLoading, error, isSuccess }] = usePatchImageProfileMutation()
    const navigation = useNavigation()

    const pickImage = async (method) => {
        const { granted } = await ImagePicker.requestCameraPermissionsAsync();
        if (!granted) return;
        
        const config = {
            aspect:[1,1],
            quality:0.2,
            base64:true,
            allowsEditing:true
        }
        const result = (method == "camera") ? 
            await ImagePicker.launchCameraAsync(config) 
            : 
            await ImagePicker.launchImageLibraryAsync(config)
    
        if(result.canceled) return

        setImage("data:image/jpg;base64," + result.assets[0].base64)
    }

    const confirmImage = async () => {
        try {
            // Enviar la imagen con la mutación
            await triggerAddImageProfile({ localId, image }).unwrap();
            if (isSuccess) {
                // Volver al perfil después de confirmar
                navigation.navigate("MyProfile");
            }
        } catch (err) {
            console.error("Error al guardar la imagen:", err);
        }
    }

    return (
        <View style={styles.container}>
            <Image
                source={image ? { uri: image }
                    : require("../../assets/perfildafault.jpg")}
                resizeMode='cover'
                style={styles.image}
            />
            <SubmitButton title="Tomar Imagen con camara" onPress={() => pickImage("camera")} />
            <SubmitButton title="Tomar Imagen de galeria" onPress={() => pickImage("")} />
            <SubmitButton title="Confirmar" onPress={confirmImage} />
            {isLoading && <Text>Guardando...</Text>}
            {error && <Text>Error al guardar la imagen</Text>}
        </View>
    )
}

export default ImageSelector


const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: "center",
      alignItems: "center",
      backgroundColor: "#fff",
    },
    image: {
      width: 200,
      height: 200,
      borderRadius: 100,
    },
  });
