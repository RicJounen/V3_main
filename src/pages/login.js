import React, { useState } from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View, ImageBackground, TouchableOpacity, Text, TextInput, Alert, Image } from 'react-native';
import TelaBemvindo from './telaBemVindo';


export default function Login({navigation}) {
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [loggedIn, setLoggedIn] = useState(false);
  
  

  const handleLogin = () => {
    const usuariosValidos = [
      { usuario: 'eliana', senha: '1234' },
      { usuario: 'rafael', senha: 'senha2' },
      { usuario: 'wesley', senha: 'senha3' },
    ];

    const usuarioValido = usuariosValidos.find(user => user.usuario === usuario && user.senha === senha);

    if (usuarioValido) {
      setLoggedIn(true);
      navigation.navigate('BemVindo');
    } else {
      Alert.alert('Erro', 'Usuário ou senha incorretos');
    }
  };

  return (
    <View style={styles.container}>
      {loggedIn ? (
        <TelaBemvindo usuario={usuario} />
      ) : (
        <ImageBackground source={require('../img/fundo_inicial.jpeg')} style={styles.backgroundImage}>
          <View style={styles.loginContainer}>
            <Image source={require('../img/logo (2).png')} style={styles.logo} />
            <TextInput
              style={styles.input}
              placeholder="Usuário"
              keyboardType="email-address"
              autoCapitalize="none"
              value={usuario}
              onChangeText={setUsuario}
            />
            <TextInput
              style={[styles.input, { marginBottom: 20 }]}
              placeholder="Senha"
              secureTextEntry={true}
              value={senha}
              onChangeText={setSenha}
            />
            <TouchableOpacity onPress={() => Alert.alert('Esqueceu a senha?', 'Por favor, entre em contato com o suporte.')} style={styles.forgotPasswordButton}>
              <Text style={styles.forgotPasswordButtonText}>Esqueceu a senha?</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={handleLogin} style={styles.loginButton}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        </ImageBackground>
      )}
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginContainer: {
    paddingHorizontal: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 60,
  },
  input: {
    width: 200,
    height: 40,
    borderWidth: 1,
    borderColor: '#cccccc',
    borderRadius: 20,
    paddingHorizontal: 10,
    marginBottom: 30,
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  loginButton: {
    backgroundColor: '#007bff',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 5,
  },
  loginButtonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: 'bold',
  },
  forgotPasswordButton: {
    marginTop: 10,
    marginBottom: 18,
  },
  forgotPasswordButtonText: {
    color: '#ffffff',
    fontSize: 14,
    textDecorationLine: 'underline',
  },
});
