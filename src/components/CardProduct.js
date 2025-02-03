import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';
import { Dimensions } from 'react-native';
import { useNavigation } from '@react-navigation/native';
const { width } = Dimensions.get('window');


const CardProduct = ({ product }) => {
  const { title, price, stock, thumbnail, description, rating } = product;
  const navigation = useNavigation()


  return (
    <Pressable style={styles.card} onPress={()=> navigation.navigate("ProductDetail" , {product})}>
      <Image source={{ uri: thumbnail }} style={styles.image} resizeMode="contain" />
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.price}>${price.toFixed(2)}</Text>
      <Text style={styles.stock}>Stock: {stock}</Text>
      <Text style={styles.rating}>Rating: {rating}⭐</Text>
      <Text style={styles.description}>{description}</Text>
    </Pressable>
  );
};

export default CardProduct;

const styles = StyleSheet.create({
  card: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    margin: 0,
    backgroundColor: '#fff',
    alignItems: 'center',
  },
  image: {
    width: '40%', // 80% del ancho del contenedor
    aspectRatio: 1, // Proporción cuadrada (1:1)
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  price: {
    fontSize: 14,
    color: '#333',
    marginBottom: 5,
  },
  stock: {
    fontSize: 12,
    color: '#666',
    marginBottom: 5,
  },
  rating: {
    fontSize: 12,
    color: '#333',
    marginBottom: 5,
  },
  description: {
    fontSize: 12,
    color: '#666',
    textAlign: 'center',
  },
});
