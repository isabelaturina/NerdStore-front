import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import StackNavigator from './navigation/StackNavigator';  // Importe o StackNavigator
import { ItemProvider } from './context/ItemContext';  // Importe o ItemProvider

export default function App() {
  return (
    <NavigationContainer>
      <ItemProvider>
        <StackNavigator />
      </ItemProvider>
    </NavigationContainer>
  );
}
