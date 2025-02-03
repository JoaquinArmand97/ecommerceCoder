import { Pressable, StyleSheet, TextInput, View, Text } from 'react-native';
import FontAwesome from '@expo/vector-icons/FontAwesome';
import { useState } from 'react';

const Search = ({ onChangeKeyword }) => {
  const [textInput, setTextInput] = useState("");
  const [error, setError] = useState("");

  const search = () => {
    const regex = /[+\*/%-]/;
    if (regex.test(textInput)) {
      return setError("Caracter no valido");
    }
    setError("");
    onChangeKeyword(textInput);
  };

  const removeSearch = () => {
    onChangeKeyword("");
    setTextInput("");
    setError("");
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerInput}>
        <TextInput
          style={styles.input}
          value={textInput}
          onChangeText={(text) => setTextInput(text)}
          placeholderTextColor="gray"
          placeholder="Buscar"
        />

        <Pressable style={styles.iconButton} onPress={search}>
          <FontAwesome name="search" size={20} color="white" />
        </Pressable>

        <Pressable style={[styles.iconButton, styles.cancelButton]} onPress={removeSearch}>
          <FontAwesome name="times" size={20} color="white" />
        </Pressable>
      </View>
      {error ? <Text style={styles.error}>{error}</Text> : null}
    </View>
  );
};

export default Search;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 10,
    paddingTop: 15,
  },
  containerInput: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    overflow: 'hidden', // Para que los bordes redondeados se apliquen a todos los elementos
  },
  input: {
    flex: 1, // Para ocupar el espacio disponible
    padding: 10,
    backgroundColor: '#f9f9f9',
    fontSize: 16,
    color: 'black',
  },
  iconButton: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    padding: 10,
    borderLeftWidth: 1,
    borderLeftColor: '#ddd',
  },
  cancelButton: {
    backgroundColor: '#FF3B30',
  },
  error: {
    color: 'red',
    fontWeight: 'bold',
    marginTop: 5,
    fontSize: 14,
  },
});
