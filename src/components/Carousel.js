import React from 'react';
import { StyleSheet, View, FlatList, Image, Dimensions } from 'react-native';

const Carousel = ({ items }) => {
  const screenWidth = Dimensions.get('window').width;

  return (
    <FlatList
      data={items}
      horizontal
      showsHorizontalScrollIndicator={false}
      pagingEnabled
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <View style={[styles.slide, { width: screenWidth }]}>
          <Image source={{ uri: item.image }} style={styles.image} />
        </View>
      )}
    />
  );
};

export default Carousel;

const styles = StyleSheet.create({
  slide: {
    justifyContent: 'center',
    alignItems: 'center',
    padding: 10,
    margin: 5 
  },
  image: {
    width: '100%',
    height: 200,
    borderRadius: 10,
  },
});
