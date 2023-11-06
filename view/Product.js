import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image, TouchableOpacity } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import Product from '../components/UI/Product';



const ProductScreen = ({ navigation }) => {


  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Image
          source={require("../assets/listaestudantes.png")}
          style={styles.banner}

        />

        <View style={styles.textContainer}>
          <Text style={styles.text}>LANÇAMENTOS</Text>
          <TouchableOpacity style={{ position: 'absolute', right: 0, alignSelf: 'center' }}>
            <MaterialIcons
              name="filter-list"
              size={24}
              color="#000"
            />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.line} />

      <ScrollView>


        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Product img={require('../assets/product3.png')} cost="Peça seu orçamento" onClick={() => navigation.navigate('Details')}>
            Creme Dental
          </Product>
          <Product img={require('../assets/product3.png')} cost="Peça seu orçamento" onClick={() => navigation.navigate('Details')}>
          Creme Dental
          </Product>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Product img={require('../assets/product3.png')} cost="Peça seu orçamento" onClick={() => navigation.navigate('Details')}>
          Creme Dental
          </Product>
          <Product img={require('../assets/product3.png')} cost="Peça seu orçamento" onClick={() => navigation.navigate('Details')}>
          Creme Dental
          </Product>
        </View>

        <View style={{ flexDirection: 'row', justifyContent: 'space-around' }}>
          <Product img={require('../assets/product3.png')} cost="Peça seu orçamento" onClick={() => navigation.navigate('Details')}>
          Creme Dental
          </Product>
          <Product img={require('../assets/product3.png')} cost="Peça seu orçamento" onClick={() => navigation.navigate('Details')}>
          Creme Dental
          </Product>
        </View>

      </ScrollView>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: '100%',
    backgroundColor: "#FFF",

  },
  header: {
    marginBottom: 8
  },
  banner: {
    resizeMode: 'contain',
    width: 412,
    marginTop: -60,
    marginBottom: -70,
  },
  image: {
    width: '100%'
  },
  textContainer: {
    flexDirection: 'row',
    marginVertical: '5%',
    marginHorizontal: '5%'
  },
  text: {
    fontFamily: 'Anton_400Regular',
    fontSize: 26,
    marginHorizontal: '1%'
  },
  line: {
    borderBottomColor: '#D8d8d8',
    borderBottomWidth: 2,
  }
});

export default ProductScreen;