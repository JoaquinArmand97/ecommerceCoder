import { StyleSheet, Text, View } from 'react-native';
import AntDesign from '@expo/vector-icons/AntDesign';

const CardOrder = ({ order }) => {
  return (
    <View style={styles.container}>
      <View style={styles.content}>
        <Text style={styles.dateText}>Fecha: {new Date(order.createdAt * 1000).toLocaleDateString()}</Text>
        <Text style={styles.totalText}>Total: ${order.total.toFixed(2)}</Text>
      </View>
      <AntDesign name="search1" size={24} color="black" style={styles.icon} />
    </View>
  );
};

export default CardOrder;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    marginVertical: 10,
    backgroundColor: '#f2f2f2',
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 2,
  },
  content: {
    flex: 1,
    marginRight: 10,
  },
  dateText: {
    fontSize: 14,
    color: '#555',
  },
  totalText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  icon: {
    padding: 5,
  },
});