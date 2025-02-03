import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import InputForm from '../components/InputForm';
import SubmitButton from '../components/SubmitButton';
import { useNavigation } from '@react-navigation/native';
import { useSignUpMutation } from '../services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';
import { signupSchema } from '../validations/signupSchema';


const SignUp = () => { 

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [confirmPassword, setConfirmPasswordPassword] = useState("")
    const [emailError, setEmailError] = useState("")
    const [passwordError, setPasswordError] = useState ("")
    const [confirmPasswordError, setConfirmPasswordError] = useState ("")
    const navigation = useNavigation()
    const [triggerSignup] = useSignUpMutation()
    const dispatch = useDispatch()

    const onSubmit = async () => {
      try {
        console.log("Datos enviados:", { email, password });
        signupSchema.validateSync({ email, password, confirmPassword });
    
        const response = await triggerSignup({ email, password });
        console.log("Respuesta de la API:", response);
    
        if (!response || !response.data) {
          throw new Error("La respuesta de la API no contiene datos");
        }
    
        const user = {
          email: response.data.email,
          idToken: response.data.idToken,
          localId: response.data.localId,
        };
    
        dispatch(setUser(user));
        await deleteSesion();
        await insertSession(user.localId, user.email, user.idToken);
      } catch (error) {
        console.error("Error en onSubmit:", error);
    
        if (error.response) {
          // Verificar la estructura del error devuelto por la API
          const apiError = error.response.data.error;
          if (apiError) {
            console.error("Error detallado de la API:", apiError);
            setEmailError(apiError.message || "Error desconocido");
          }
        } else if (error.path) {
          // Si el error proviene de la validación de Yup
          switch (error.path) {
            case "email":
              setEmailError(error.message);
              setPasswordError("");
              setConfirmPasswordError("");
              break;
            case "password":
              setPasswordError(error.message);
              setEmailError("");
              setConfirmPasswordError("");
              break;
            case "confirmPassword":
              setConfirmPasswordError(error.message);
              setEmailError("");
              setPasswordError("");
              break;
          }
        } else {
          // Error desconocido
          setEmailError("Error inesperado. Intenta nuevamente.");
        }
      }
    };
    
    

return (
  <View style={styles.main}>
  <View style={styles.container}>
    <Text style={styles.title}>Registrarme</Text>
    <InputForm
        label="Email"
        value={email}
        onChangeText={(t) => setEmail(t)}
        isSecure={false}
        error={emailError}
      />
       <InputForm
        label="Password"
        value={password}
        onChangeText={(t) => setPassword(t)}
        isSecure={true}
        error={passwordError}
      />
      <InputForm
            label="Confirm password"
            value={confirmPassword}
            onChangeText={(t) => setConfirmPasswordPassword(t)}  
            isSecure={true}
            error={confirmPasswordError}  
    />
      <SubmitButton onPress={onSubmit} title="Registrarme" />
      <Text style={styles.questionText}>¿Ya tenes cuenta registrada?</Text>
      <Pressable onPress={() => navigation.navigate('Login')}>
        <Text style={styles.linkText}>Volver</Text>
      </Pressable>
  </View>
  </View>

)
}

export default SignUp

const styles = StyleSheet.create({
    main: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#f5f5f5',
      padding: 20,
    },
    container: {
      width: '100%',
      backgroundColor: '#fff',
      borderRadius: 10,
      padding: 20,
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,
      elevation: 5,
    },
    title: {
      fontSize: 24,
      fontWeight: 'bold',
      color: '#333',
      marginBottom: 20,
      textAlign: 'center',
    },
    questionText: {
      fontSize: 16,
      color: '#555',
      marginTop: 20,
      textAlign: 'center',
    },
    linkText: {
      fontSize: 16,
      color: '#007BFF',
      textAlign: 'center',
      fontWeight: 'bold',
      marginTop: 5,
    },
  });

