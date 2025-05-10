import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import ItemCard from '../components/ItemCard';
import { useItemContext } from '../context/ItemContext';
import { useNavigation } from '@react-navigation/native';
import { Ionicons } from '@expo/vector-icons';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../navigation/types';

export default function HomeScreen() {
  const { items } = useItemContext();
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus itens</Text>

      {items.length === 0 ? (
        <Text style={styles.emptyText}>Nenhum item adicionado ainda.</Text>
      ) : (
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {items.map((item) => (
            <ItemCard
              key={item.id}
              title={item.title}
              category={item.category}
              price={item.price}
              image={item.image}
            />
          ))}
        </ScrollView>
      )}

      <TouchableOpacity
        style={styles.addButton}
        onPress={() => navigation.navigate('AdicionarItem')}
      >
        <Ionicons name="add" size={28} color="#fff" />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 50,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 22,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  emptyText: {
    fontSize: 16,
    color: '#666',
  },
  addButton: {
    position: 'absolute',
    right: 20,
    bottom: 30,
    backgroundColor: '#6C4EE3',
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 3,
  },
});