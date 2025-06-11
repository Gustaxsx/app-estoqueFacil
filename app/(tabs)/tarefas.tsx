import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function TarefasScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Minhas Tarefas</Text>
      <Text style={styles.subtitle}>Gerencie suas tarefas relacionadas ao estoque.</Text>
      {/* Adicione componentes de tarefas aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#2C3E50',
  },
  subtitle: {
    fontSize: 16,
    color: '#34495E',
    textAlign: 'center',
  },
});