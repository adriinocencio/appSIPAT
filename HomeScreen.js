import React from 'react';
import { View, Text, StyleSheet, Image, ScrollView } from 'react-native';

function HomeScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Image
        source={require('./assets/logo_sipat.png')} // Caminho correto para a imagem
        style={styles.logo}
      />
      <Text style={styles.title}>Bem-vindo à SIPAT 2024!</Text>
      <Text style={styles.subtitle}>Semana Interna de Prevenção de Acidentes do Trabalho</Text>
      <Image
        source={{uri: 'https://example.com/safety_image.jpg'}}
        style={styles.image}
      />
      <Text style={styles.content}>
        Participe das nossas palestras, treinamentos e atividades que promovem a segurança e o bem-estar no ambiente de trabalho.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});

export default HomeScreen;