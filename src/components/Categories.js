import { useEffect } from 'react';
import { StyleSheet, FlatList } from 'react-native';
import { useGetCategoriesQuery } from '../services/shop';
import CardItemCategory from './CardItemCategory';

const Categories = () => {
  const { data: categories, isError, error, isSuccess } = useGetCategoriesQuery();

  useEffect(() => {
    if (isSuccess) console.log(categories);
    if (isError) console.log(error);
  }, [isError, error, isSuccess, categories]);

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item}
      renderItem={({ item }) => <CardItemCategory item={item} />}
      contentContainerStyle={styles.containerCard}
      numColumns={2} // Mostrar dos columnas de cards
    />
  );
};

export default Categories;

const styles = StyleSheet.create({
  containerCard: {
    paddingBottom: 50,
    paddingHorizontal: 10, // Espaciado lateral para mejor alineación
    justifyContent: 'center',
  },
});
