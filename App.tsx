// App.tsx
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './src/navigation/StackNavigator'; // Caminho ajustado se necessário
import { ItemProvider } from './src/context/ItemContext';

export default function App() {
  return (
    <NavigationContainer> {/* OBRIGATÓRIO */}
      <ItemProvider> {/* Seu contexto de itens */}
        <StackNavigator /> {/* Suas telas */}
      </ItemProvider>
    </NavigationContainer>
  );
}
