import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function SafetyTipsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Dicas de Segurança da SIPAT 2024</Text>
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
        5. Reporte qualquer situação de risco ao seu supervisor imediatamente.
      </Text>
      <Text style={styles.tip}>
        6. Faça pausas regulares para evitar fadiga e manter a concentração.
      </Text>
      <Text style={styles.tip}>
        7. Evite o uso de dispositivos eletrônicos enquanto caminha pelo local de trabalho.
      </Text>
      <Text style={styles.tip}>
        8. Mantenha-se hidratado e alimente-se bem para garantir sua saúde e segurança.
      </Text>
      <Text style={styles.tip}>
        9. Utilize as ferramentas e máquinas conforme as instruções dos fabricantes.
      </Text>
      <Text style={styles.tip}>
        10. Esteja sempre atento e cuide da sua segurança e dos seus colegas.
      </Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    backgroundColor: '#FFFFFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    marginBottom: 20,
    textAlign: 'center',
  },
  tip: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 10,
  },
});

export default SafetyTipsScreen;