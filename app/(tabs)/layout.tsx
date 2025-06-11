import { MaterialCommunityIcons } from '@expo/vector-icons';
import { Tabs } from 'expo-router';
import React from 'react';

export default function TabLayout() {
  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: '#007BFF', // Cor do ícone/texto da aba ativa
        tabBarInactiveTintColor: '#666',   // Cor da aba inativa
        headerShown: true, // Mostra o cabeçalho no topo da tela
        tabBarStyle: {
          height: 60,
          paddingBottom: 5,
          paddingTop: 5,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: '600',
        }
      }}
    >
      <Tabs.Screen
        name="tarefas"
        options={{
          title: 'Tarefas',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="clipboard-list-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="informacoes-produto"
        options={{
          title: 'Produtos',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="information-outline" size={24} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="cadastrar-produto"
        options={{
          title: 'Cadastrar',
          tabBarIcon: ({ color }) => (
            <MaterialCommunityIcons name="plus-box-outline" size={24} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}