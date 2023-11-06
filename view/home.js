import { StatusBar } from "expo-status-bar";
import React, { useState, Component } from "react";
import { AntDesign } from '@expo/vector-icons';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";
import RegisterScreen from './register';
import { NativeBaseProvider } from 'native-base';

const HomeScreen = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showModal, setShowModal] = useState(false);

  return (
    <View style={styles.container}>
      <NativeBaseProvider><RegisterScreen showModal={showModal} setShowModal={setShowModal} /></NativeBaseProvider>

      <Image style={styles.image} source={require("../assets/log.jpeg")} />
      <StatusBar style="auto" />
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Email."
          placeholderTextColor="#003f5c"
          onChangeText={(email) => setEmail(email)}
        />
      </View>
      <View style={styles.inputView}>
        <TextInput
          style={styles.TextInput}
          placeholder="Senha."
          placeholderTextColor="#003f5c"
          secureTextEntry={true}
          onChangeText={(password) => setPassword(password)}
        />
      </View>


      <TouchableOpacity>
        <Text style={styles.forgot_button}>Esqueçeu a senha?</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => navigation.navigate('Product')}>
        <Text style={styles.loginText}>LOGIN</Text>

      </TouchableOpacity>
      <TouchableOpacity style={styles.loginBtn} onPress={() => setShowModal(true)}>
        <Text style={styles.loginText}>CADASTRE-SE</Text>
      </TouchableOpacity>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#197BF6",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    resizeMode: 'center',
    width: 412,
    marginTop: -150,
    marginBottom: -80,
  },
  inputView: {
    backgroundColor: "#fff",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
    alignItems: "center",
  },
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 0,
  },
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 60,
    backgroundColor: "#fff",
  },
});
export default HomeScreen;