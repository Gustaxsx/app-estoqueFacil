import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function InformacoesProdutoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações do Produto</Text>
      <Text style={styles.subtitle}>Consulte detalhes e histórico de produtos.</Text>
      {/* Adicione componentes para exibir informações de produtos aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E6EEF4', // Cor ligeiramente diferente
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