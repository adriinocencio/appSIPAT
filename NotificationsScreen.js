import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';

function NotificationsScreen() {
  return (
    <ScrollView contentContainerStyle={styles.container}>
      <Text style={styles.title}>Notificações da SIPAT 2024</Text>
      <View style={styles.notification}>
        <Text style={styles.notificationTitle}>Nova Palestra Confirmada</Text>
        <Text style={styles.notificationDetails}>A palestra "Segurança no Trabalho" foi confirmada para o dia 25/05/2024 às 10:00 no Auditório Principal.</Text>
      </View>
      <View style={styles.notification}>
        <Text style={styles.notificationTitle}>Treinamento Adicional</Text>
        <Text style={styles.notificationDetails}>Foi adicionado um novo treinamento sobre "Primeiros Socorros" no dia 27/05/2024 às 09:00 no Auditório 2.</Text>
      </View>
      {/* Adicione mais notificações conforme necessário */}
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
  notification: {
    marginBottom: 20,
    padding: 15,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  notificationTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 5,
  },
  notificationDetails: {
    fontSize: 16,
    color: '#666',
  },
});

export default NotificationsScreen;