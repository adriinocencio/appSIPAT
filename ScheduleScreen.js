import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function ScheduleScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Cronograma da SIPAT 2024</Text>
      <View style={styles.event}>
        <Text style={styles.eventTitle}>Palestra: Segurança no Trabalho</Text>
        <Text style={styles.eventDetails}>Data: 25/05/2024 - 10:00</Text>
        <Text style={styles.eventDetails}>Local: Auditório Principal</Text>
      </View>
      <View style={styles.event}>
        <Text style={styles.eventTitle}>Treinamento: Uso de EPIs</Text>
        <Text style={styles.eventDetails}>Data: 26/05/2024 - 14:00</Text>
        <Text style={styles.eventDetails}>Local: Sala de Treinamento 1</Text>
      </View>
      <View style={styles.event}>
        <Text style={styles.eventTitle}>Workshop: Primeiros Socorros</Text>
        <Text style={styles.eventDetails}>Data: 27/05/2024 - 09:00</Text>
        <Text style={styles.eventDetails}>Local: Auditório 2</Text>
      </View>
      {/* Adicione mais eventos conforme necessário */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
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
  event: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#f9f9f9',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  eventTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  eventDetails: {
    fontSize: 16,
    color: '#666',
  },
});

export default ScheduleScreen;