import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native'; // Importe 'Image'

// Importe sua logo. Certifique-se de que o caminho está correto.
// Exemplo: se sua logo está em 'assets/images/minha-logo.png'
const logo = require('../../assets/images/Logo.png'); // Ajuste o caminho conforme onde você salvou a logo

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      {/* Adicionando a logo */}
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Bem-vindo ao Estoque Fácil!</Text>
      <Text style={styles.message}>
        Organize suas tarefas de forma simples e eficiente.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF', // Uma cor de fundo suave
    padding: 20,
  },
  logo: {
    width: 200, // Largura da logo (ajuste conforme necessário)
    height: 200, // Altura da logo (ajuste para manter a proporção ou use 'auto')
    marginBottom: 30, // Espaçamento abaixo da logo
    // backgroundColor: '#EEE', // Apenas para debug, para ver o espaço da logo
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#333',
    textAlign: 'center',
  },
  message: {
    fontSize: 18,
    color: '#666',
    marginBottom: 20,
    textAlign: 'center',
    lineHeight: 25,
  },
  smallText: {
    fontSize: 14,
    color: '#999',
    textAlign: 'center',
    marginTop: 15,
  },
});