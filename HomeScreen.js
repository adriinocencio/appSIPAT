import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';

function HomeScreen() {
  return (
    <View style={styles.container}>
      <Image source={{uri: 'https://example.com/logo.png'}} style={styles.logo} />
      <Text style={styles.title}>Bem-vindo à SIPAT 2024!</Text>
      <Text style={styles.subtitle}>Semana Interna de Prevenção de Acidentes do Trabalho</Text>
      <Text style={styles.content}>
        Participe das nossas palestras, treinamentos e atividades que promovem a segurança e o bem-estar no ambiente de trabalho.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 18,
    color: '#333333',
    textAlign: 'center',
    marginBottom: 20,
  },
  content: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
  },
});

export default HomeScreen;