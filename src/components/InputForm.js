import { Text, View, TextInput, StyleSheet } from 'react-native';

const InputForm = ({ label, value, onChangeText, isSecure, error }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <TextInput 
        value={value} 
        onChangeText={onChangeText} 
        secureTextEntry={isSecure} 
        style={styles.input}
      />
      {error ? (
        <View>
          <Text style={styles.errorText}>{error}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default InputForm;

const styles = StyleSheet.create({
  container: {
    marginBottom: 15,
    width: '100%',
  },
  label: {
    fontSize: 16,
    marginBottom: 5,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 10,
    backgroundColor: '#fff',
  },
  errorText: {
    marginTop: 5,
    fontSize: 14,
    color: '#FF0000', 
    fontWeight: 'bold',
  },
});
