// app/home.js (ou home.tsx)

import { useRouter } from 'expo-router'; // Importar useRouter para navegação
import React from 'react';
import { Button, StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  const router = useRouter();

  // Exemplo de função de logout (você pode integrar com o Firebase depois)
  const handleLogout = () => {
    // Lógica de logout do Firebase viria aqui (ex: signOut(auth);)
    console.log("Usuário deslogado!");
    router.replace('/login'); // Redireciona para a tela de login após o logout
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo à sua Área Principal!</Text>
      <Text style={styles.subtitle}>Aqui você poderá gerenciar seu estoque.</Text>

      {/* Você pode adicionar um botão de logout para testes */}
      <Button title="Sair (Logout)" onPress={handleLogout} color="#FF6347" />

      {/* Adicione mais componentes aqui para o seu app de estoque */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F0F8FF', // Uma cor de fundo suave
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    marginBottom: 15,
    color: '#2C3E50',
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#34495E',
    marginBottom: 30,
    textAlign: 'center',
  },
});