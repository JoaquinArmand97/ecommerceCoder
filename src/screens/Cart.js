import { StyleSheet, FlatList, View, Pressable , Text} from 'react-native';
import cart from '../data/cart.json';
import CardCartProduct from '../components/CardCartProduct';
import { useGetCartQuery, usePostCartMutation } from '../services/cart';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

const Cart = () => {

  const [triggerPost] = usePostCartMutation()
  const localId = useSelector(state => state.user.localId)
  const {data:cart} = useGetCartQuery({localId})
  const [total , setTotal] = useState (0)

  useEffect(()=>{
    if(cart){
      setTotal(cart.reduce((acc,item) => acc + item.price * item.quantity ,0 ))
    }
  },[cart])


  const confirmCart = () => {
    triggerPost({id: "2" , products:[{id:"2"}], total:120})
  }
  

  return (
    <View style={styles.container}>
      <FlatList
          data={cart} 
          keyExtractor={(item, index) => item.id || index.toString()} 
          renderItem={({ item }) => <CardCartProduct product={item} />}
        />

      <View style={styles.footer}>    
        <Text style={styles.totalText}>Total:{total}$ Arg</Text>
        <Pressable style={styles.checkoutButton}>
          <Text style={styles.checkoutText}>Finalizar Compra</Text>
        </Pressable>
      </View>
    </View>
  );
};

export default Cart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    padding: 10,
  },
  footer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 15,
    borderTopWidth: 1,
    borderTopColor: '#ccc',
    backgroundColor: '#f9f9f9',
  },
  totalText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  checkoutButton: {
    backgroundColor: '#0cb7f2',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  checkoutText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});