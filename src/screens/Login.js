import React, { useState } from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';
import InputForm from '../components/InputForm'; 
import SubmitButton from '../components/SubmitButton'; 
import { useNavigation } from '@react-navigation/native';
import SignUp from '../screens/SignUp';
import { useLoginMutation } from '../services/auth';
import { useDispatch } from 'react-redux';
import { setUser } from '../features/userSlice';
import { LoginSchema } from '../validations/loginSchema';



const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const navigation = useNavigation();
  const [triggerLogin] = useLoginMutation();
  const dispatch = useDispatch();

  const onSubmit = async () => {
    try {
      await LoginSchema.validate({ email, password });
  
      const response = await triggerLogin({ email, password });
      console.log("Login Response:", response);
  
      if (!response.data) {
        setPasswordError("Error de autenticación. Verifica tus credenciales.");
        return;
      }
  
      const user = {
        email: response.data.email || "",
        idToken: response.data.idToken || "",
        localId: response.data.localId || "",
      };
      dispatch(setUser(user));
    } catch (error) {
      console.log("Login Error:", error);
      switch (error.path) {
        case "email":
          setEmailError(error.message);
          setPasswordError("");
          break;
        case "password":
          setPasswordError(error.message);
          setEmailError("");
          break;
        default:
          setEmailError("");
          setPasswordError("Ha ocurrido un error. Por favor, inténtalo de nuevo.");
      }
    }
  };
  

  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Ingresar</Text>
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
        <SubmitButton onPress={onSubmit} title="Send" />
        <Text style={styles.questionText}>¿No tienes una cuenta?</Text>
        <Pressable onPress={() => navigation.navigate("SignUp")}>
          <Text style={styles.linkText}>Registrarme</Text>
        </Pressable>
      </View>
    </View>
  );
};


export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  form: {
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
