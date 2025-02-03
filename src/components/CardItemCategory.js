import { Pressable, StyleSheet } from 'react-native';
import ShadowCard from './wrappers/ShadowCard';
import TextPrimary from '../components/TextPrimary';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import { setProductsFilteredByCategory } from "../features/shopSlice";
import React, { useState } from 'react';

const CardItemCategory = ({ item: category }) => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const [isPressed, setIsPressed] = useState(false);

  return (
    <Pressable
      onPressIn={() => setIsPressed(true)}
      onPressOut={() => setIsPressed(false)}
      onPress={() => {
        dispatch(setProductsFilteredByCategory(category));
        navigation.navigate("ProductsByCategory", { category });
      }}
      style={isPressed ? styles.pressableActive : styles.pressable}
    >
      <ShadowCard style={styles.container}>
        <TextPrimary style={styles.text}>{category}</TextPrimary>
      </ShadowCard>
    </Pressable>
  );
};

export default CardItemCategory;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#4a90e2", // Color vibrante
    margin: 10,
    padding: 20,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 15, // Bordes más redondeados
    width: 150, // Más grandes para mejor visualización
    height: 150,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5, // Sombra en Android
  },
  text: {
    color: "white",
    fontSize: 16,
    fontWeight: "bold",
    textAlign: "center",
  },
  pressable: {
    transform: [{ scale: 1 }],
  },
  pressableActive: {
    transform: [{ scale: 0.95 }], // Reduce tamaño al presionar
  },
});
