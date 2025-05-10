import React from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import ItemCard from '../components/ItemCard';
import { items } from '../services/mockItems';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Seus itens</Text>

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
});
