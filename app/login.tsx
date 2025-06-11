// app/login.js

import { useRouter } from 'expo-router'; // Importar useRouter para navegação
import { FirebaseError } from 'firebase/app';

import React, { useState } from 'react';
import { Alert, Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';


// Importe sua logo. Ajuste o caminho se necessário.
const logo = require('../assets/images/Logo.png');

// Importe a configuração do Firebase e o serviço de autenticação
// Certifique-se que o caminho para seu firebaseConfig.js está correto

export default function LoginScreen() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter(); // Hook para navegação

  // Função para lidar com o login
  const handleLogin = async () => {
    if (!email || !password) {
      Alert.alert('Erro', 'Por favor, preencha seu email e senha.');
      return;
    }

    try {
      // Tenta fazer login com email e senha no Firebase
      Alert.alert('Sucesso', 'Login efetuado com sucesso!');
      router.replace('/home'); // Navega para a tela principal (ex: '/home')
                               // Lembre-se de criar uma rota '/home' ou apontar para a sua tela principal
    } catch (error) {
        console.error("Erro no login:", error); // Para depuração
      
        let errorMessage = 'Erro ao efetuar login. Verifique suas credenciais.';
      
        // <--- ADICIONE ESTE BLOCO DE VERIFICAÇÃO!
        if (error instanceof FirebaseError) {
          if (error.code === 'auth/invalid-email') {
            errorMessage = 'O formato do email é inválido.';
          } else if (error.code === 'auth/user-not-found' || error.code === 'auth/wrong-password') {
            errorMessage = 'Email ou senha incorretos.';
          } else if (error.code === 'auth/user-disabled') {
            errorMessage = 'Esta conta foi desativada.';
          }
          // Você pode adicionar mais tratamentos para outros códigos de erro do Firebase se desejar
        }
        // <--- FIM DO BLOCO DE VERIFICAÇÃO
      
        Alert.alert('Erro no Login', errorMessage);
    }
  };

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo} resizeMode="contain" />

      <Text style={styles.title}>Bem-vindo ao Estoque Fácil</Text>
      <Text style={styles.subtitle}>Faça login para continuar</Text>

      <TextInput
        style={styles.input}
        placeholder="Email"
        placeholderTextColor="#999"
        keyboardType="email-address"
        autoCapitalize="none"
        value={email}
        onChangeText={setEmail}
      />
      <TextInput
        style={styles.input}
        placeholder="Senha"
        placeholderTextColor="#999"
        secureTextEntry // Esconde o texto digitado
        value={password}
        onChangeText={setPassword}
      />

      <TouchableOpacity style={styles.button} onPress={handleLogin}>
        <Text style={styles.buttonText}>Entrar</Text>
      </TouchableOpacity>

      {/* Removemos os botões de "Cadastre-se" e "Esqueceu a senha?" */}
      {/* Se quiser apenas o "Esqueceu a senha" sem o cadastro, pode deixá-lo. */}
      {/* Exemplo se quisesse deixar só o de esquecer a senha: */}
      {/*
      <TouchableOpacity onPress={() => Alert.alert('Recuperar Senha', 'Entre em contato com o administrador para recuperar sua senha.')}>
        <Text style={styles.linkText}>Esqueceu a senha?</Text>
      </TouchableOpacity>
      */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E0F7FA', // Uma cor de fundo um pouco diferente, mais clara
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    marginBottom: 10,
    color: '#263238', // Uma cor mais escura para o título
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 16,
    color: '#546E7A', // Uma cor mais suave para o subtítulo
    marginBottom: 30,
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 50,
    backgroundColor: '#FFF',
    borderRadius: 8,
    paddingHorizontal: 15,
    marginBottom: 15,
    borderWidth: 1,
    borderColor: '#B0BEC5', // Borda mais suave
    fontSize: 16,
    color: '#333',
    shadowColor: '#000', // Sombra sutil para os inputs
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 3,
    elevation: 2, // Sombra para Android
  },
  button: {
    width: '100%',
    height: 50,
    backgroundColor: '#007BFF', // Um azul mais comum para botões
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20, // Aumenta a margem superior já que não tem outros botões
    marginBottom: 0, // Não precisa mais de margem inferior se não tiver outros elementos
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 18,
    fontWeight: 'bold',
  },
  // linkText, registerContainer, registerText, registerLinkText foram removidos
});