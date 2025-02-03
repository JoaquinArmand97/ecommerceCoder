import { StyleSheet, Text, View, StatusBar, Pressable } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import ArrowGoBack from '../components/ArrowGoBack';

const Header = ({title }) => {

  const navigate = useNavigation()

  return (
    <View style={styles.container}>
      {navigate.canGoBack() ? <ArrowGoBack/> : null}
      <Text style={styles.title}>{title}</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#14233d",
    marginTop: 28,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    flexDirection: "row", 
    position: "relative"
  },
  title: {
    color: "white",
    fontSize: 28,
    fontFamily: "josefin"
    
  },


});

