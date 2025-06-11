import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function CadastrarProdutoScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Cadastrar Produto</Text>
      <Text style={styles.subtitle}>Adicione novos produtos ao seu estoque.</Text>
      {/* Adicione um formulário de cadastro de produto aqui */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#D1E6F0', // Outra cor ligeiramente diferente
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