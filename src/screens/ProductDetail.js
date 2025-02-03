import { StyleSheet, Text, View, Image, Pressable } from 'react-native';
import React from 'react';


const ProductDetail = ({route}) => {

  const {product} = route.params

 

  const handleAddToCart = () => {
    console.log("Gracias por comprar");
  };

  return (
    <View style={styles.productContainer}>
      <Image source={{ uri: product.thumbnail }} style={styles.image} resizeMode="contain"  />
      <Text style={styles.name}>{product.name}</Text>
      <Text style={styles.description}>{product.description}</Text>
      <Text style={styles.price}>${product.price}</Text>
      <Pressable style={styles.button} onPress={handleAddToCart}>
        <Text style={styles.buttonText}>Agregar al carrito</Text>
      </Pressable>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f5f5f5",
    gap: 10
  },
  contentContainer: {
    padding: 20,
  },
  productContainer: {
    padding: 20,
    backgroundColor: "#fff",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 5,
    elevation: 3,
  },
  image: {
    width: "100%",
    height: 300,
    borderRadius: 10,
    marginBottom: 10,
  },
  name: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 5,
  },
  description: {
    fontSize: 16,
    color: "#666",
    marginBottom: 10,
  },
  price: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 15,
  },
  button: {
    backgroundColor: "#007BFF",
    paddingVertical: 10,
    borderRadius: 5,
    alignItems: "center",
    borderRadius: 10
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});
