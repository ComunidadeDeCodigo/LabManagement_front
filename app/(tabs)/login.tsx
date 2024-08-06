import { StyleSheet, Image, View, TextInput, Button, Alert, TouchableOpacity, Linking } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { useState } from 'react';


const TabTwoScreen = (data:any) => {

  const [name, setName] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if(!name && !password) {
      Alert.alert("Coloque o Nome e Senha!"); //Para mostrar no fone
      alert("Coloque o nome e senha!"); //Para mostrar no PC(Browser)
    }
   else if(!name){
      alert("Coloque o nome!"); //Para mostrar no PC(Browser)
    }
  else  if(!password){
      alert("Coloque a senha!"); //Para mostrar no PC(Browser)
    }
    else{
      location.href = "/home"
    }
  }
  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#D0D0D0', dark: '#D0D0D0' }}
      headerImage={<Image source={require("@/assets/images/lab1.png")} style={styles.headerImage} />}>
        <ThemedText style={styles.title}>Login</ThemedText>
      <View style={styles.container}>
        <TextInput
        style={styles.input}
        placeholder='Nome Completo'
        value={name}
        onChangeText={setName}
        />

        <TextInput
        style={styles.input}
        placeholder='Senha'
        value={password}
        onChangeText={setPassword}
        secureTextEntry
        />
        <TouchableOpacity>
        <button style={styles.button} onClick={handleLogin}>Entrar</button>
        </TouchableOpacity>
        <View>
        <TouchableOpacity>
         <ThemedText style={styles.signup}>Criar uma conta</ThemedText>
          </TouchableOpacity>
        </View>
      </View>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    fontFamily:"Arial",
    color: '#808080',
    bottom: -1,
    left: -35,
    position: 'absolute',
    height:250,
    width:1300,
  },
  button:{
    margin:"auto",
    width:200,
    padding:10,
    backgroundColor:"darkcyan",
    color:"white"
  },
  signup: {
    fontSize:13,
    color:"darkcyan",
    fontFamily:"Arial",
    margin:0,
  },
  container: {
    flexDirection: 'column',
    flex:1,
    gap: 8,
    padding:10,
    justifyContent:"center",
    margin:"auto",
  },
  title:{
    fontSize:24,
    color:"darkcyan",
    fontWeight:"bold"

  },
  input:{
    borderWidth:1,
    borderColor:"#ccc",
    padding:10,
    borderRadius:5,

  },
});
export default TabTwoScreen
