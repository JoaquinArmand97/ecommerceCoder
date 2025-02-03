import { StyleSheet, View  } from 'react-native';
import Header from '../components/Header';
import Categories from '../components/Categories';
import { colors } from '../global/colors';
import Carousel from '../components/Carousel';

const carouselItems = [
  { image: 'https://shakeadito.com/wp-content/uploads/2021/02/POSTS-FERNET_portada-SITIO-1370x929.jpg' },
  { image: 'https://e00-expansion.uecdn.es/assets/multimedia/imagenes/2022/03/22/16479411977129.jpg' },
 
];

const Home = () => {
  return (
    <View style={styles.container}>
      
      {/* <Carousel items={carouselItems} /> */}
      <Categories />
    </View>
  );
};


export default Home

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.primary,
    flex: 1,
    justifyContent: 'center', 
    alignItems: 'center', 
    padding: 10,
  },
})