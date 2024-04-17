import React from 'react';
import { View, StyleSheet, ImageBackground, Image, ScrollView, TouchableOpacity, Text, LogBox } from 'react-native';

const TelaTurmas = ({ navigation }) => { // Alterado para incluir o objeto de navegação
  // Remova a linha abaixo se não estiver usando LogBox
  LogBox.ignoreLogs(['Sending']);
  
  return (
    <ImageBackground source={require('../img/fundo.jpeg')} style={styles.backgroundImage}>
      <ScrollView contentContainerStyle={styles.container}>
        <TouchableOpacity style={styles.circulo} onPress={() => navigation.navigate('Curriculo')}>
          <Image style={styles.imagemCirculo1} source={require('../img/3mds.png')} />
          <Text style={styles.textoCirculo}>Turmas</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circulo} onPress={() => console.log("Botão 2 pressionado")}>
          <Image style={styles.imagem} source={require('../img/3tds.png')} />
          <Text style={styles.textoCirculo}>Frequência</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.circulo} onPress={() => console.log("Botão 3 pressionado")}>
          <Image style={styles.imagemCirculo3} source={require('../img/2tdp.png')} />
          <Text style={styles.textoCirculo}>Relatório</Text>
        </TouchableOpacity>
      </ScrollView>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    justifyContent: "center"
  },
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  circulo: {
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 10,
  },
  imagem: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  imagemCirculo1: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  imagemCirculo3: {
    height: 150,
    width: 150,
    borderRadius: 75,
  },
  textoCirculo: {
    color: 'white',
    fontSize: 16,
    marginTop: 10, // Espaçamento entre a imagem e o texto
  },
});

export default TelaTurmas;
