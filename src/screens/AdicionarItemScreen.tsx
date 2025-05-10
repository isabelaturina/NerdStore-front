import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, Alert } from 'react-native';
import { useItemContext } from '../context/ItemContext';  // Importando o contexto
import { useNavigation } from '@react-navigation/native';

export default function AdicionarItemScreen() {
  const { addItem } = useItemContext();  // Função que vem do contexto
  const navigation = useNavigation();

  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [price, setPrice] = useState('');

  function handleAdd() {
    if (!title || !category || !price) {
      return Alert.alert('Preencha todos os campos!');
    }

    // Gerando ID único com Date.now() e Math.random()
    const newItem = {
      id: `${Date.now()}-${Math.floor(Math.random() * 1000)}`,  // Gerando ID único
      title,
      category,
      price,
      image: require('../../assets/default.jpg'),  // Substitua por uma imagem válida
    };

    addItem(newItem);  // Adicionando o item no contexto
    navigation.goBack();  // Voltando para a tela anterior
  }

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput style={styles.input} value={title} onChangeText={setTitle} />

      <Text style={styles.label}>Categoria:</Text>
      <TextInput style={styles.input} value={category} onChangeText={setCategory} />

      <Text style={styles.label}>Preço:</Text>
      <TextInput style={styles.input} value={price} onChangeText={setPrice} />

      <TouchableOpacity style={styles.button} onPress={handleAdd}>
        <Text style={styles.buttonText}>Adicionar Item</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
    flex: 1,
  },
  label: {
    fontSize: 16,
    marginTop: 10,
  },
  input: {
    borderBottomWidth: 1,
    padding: 8,
    marginBottom: 15,
    fontSize: 16,
  },
  button: {
    marginTop: 20,
    backgroundColor: '#6C4EE3',
    paddingVertical: 15,
    borderRadius: 8,
    alignItems: 'center',
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
  },
});
