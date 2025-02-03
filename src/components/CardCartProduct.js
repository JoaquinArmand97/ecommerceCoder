import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import Entypo from '@expo/vector-icons/Entypo';

const CardCartProduct = ({ product, onRemove }) => {
  const { title, description, price } = product;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.description}>{description}</Text>
      <View style={styles.detailsContainer}>
        <Text style={styles.price}>Precio: ${price}</Text>
        <Text style={styles.quantity}>Cantidad: 1</Text>
        <TouchableOpacity onPress={onRemove} style={styles.trashButton}>
          <Entypo name="trash" size={24} color="red" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default CardCartProduct;

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#f2f2f2',
    margin: 10,
    borderRadius: 8,
    padding: 15,
    shadowColor: '#000',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 4,
    elevation: 3,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 10,
  },
  detailsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  price: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#333',
  },
  quantity: {
    fontSize: 14,
    color: '#555',
  },
  trashButton: {
    padding: 5,
  },
});