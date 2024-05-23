import React from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';

function SafetyTipsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dicas de Segurança da SIPAT 2024</Text>
      <Image
        source={{uri: 'https://example.com/safety_tips_image.jpg'}}
        style={styles.image}
      />
      <Text style={styles.tip}>
        1. Utilize Equipamentos de Proteção Individual (EPIs) adequadamente.
      </Text>
      <Text style={styles.tip}>
        2. Mantenha seu ambiente de trabalho organizado para evitar acidentes.
      </Text>
      <Text style={styles.tip}>
        3. Siga as sinalizações de segurança no local de trabalho.
      </Text>
      <Text style={styles.tip}>
        4. Participe dos treinamentos e palestras sobre segurança no trabalho.
      </Text>
      <Text style={styles.tip}>
        5. Em caso de emergência, siga os procedimentos de evacuação.
      </Text>
      {/* Adicione mais dicas conforme necessário */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  image: {
    width: '100%',
    height: 200,
    marginBottom: 20,
  },
  tip: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
});

export default SafetyTipsScreen;