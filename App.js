
import React, { useState, Component } from "react";
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import ProductScreen from './view/Product';
import HomeScreen from './view/home';
import RegisterScreen from './view/register';
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { TouchableOpacity } from "react-native";
import Header from './components/UI/Header';
import { View, TextInput, StyleSheet, Image } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { Feather } from '@expo/vector-icons';


const Stack = createStackNavigator();


function App() {

  const { MongoClient } = require("mongodb");
// Replace the uri string with your connection string.
const uri = "mongodb+srv://felipeart:<102203>@stillus.qz0h31r.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri);
async function run() {
  try {
    const database = client.db('sample_mflix');
    const movies = database.collection('movies');
    // Query for a movie that has the title 'Back to the Future'
    const query = { title: 'Back to the Future' };
    const movie = await movies.findOne(query);
    console.log(movie);
  } finally {
    // Ensures that the client will close when you finish/error
    await client.close();
  }
}
run().catch(console.dir);

  const [searchQuery, setSearchQuery] = React.useState('');

  const onChangeSearch = query => setSearchQuery(query);

  return (


    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={HomeScreen}

        />
        <Stack.Screen name="Product" component={ProductScreen} options={{
          headerTitle: "",
          headerRight: () =>
            <Searchbar
              placeholder="Search"
              onChangeText={() => { }}

            />,
          headerLeft: () =>

            <Image
              source={require("./assets/log.jpeg")}
              style={styles.banner}

            />

          ,
          
          headerStyle: {
            height: 150,
            borderBottonLeftRadius: 50,
            borderBottonRightRadius: 50,
            backgroundColor: '#197BF6',
            shadowColor: '#000',
            elevation: 25
          }
        }} />
        <Stack.Screen name="Register" component={RegisterScreen} />
      </Stack.Navigator>
    </NavigationContainer>




  );
}
export default () => {
  return (
    

    <App />

  )
}

const styles = StyleSheet.create({

  banner: {
    resizeMode: 'center',
    width: 100,

  }
});