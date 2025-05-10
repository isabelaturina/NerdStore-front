import React from 'react';
import { View, Text, StyleSheet, Image, ImageSourcePropType } from 'react-native';

type Props = {
  title: string;
  category: string;
  price: string;
  image: ImageSourcePropType;
};

export default function ItemCard({ title, category, price, image }: Props) {
  return (
    <View style={styles.card}>
      <Image source={image} style={styles.cardImage} />
      <Text style={styles.cardTitle}>{title}</Text>
      <Text style={styles.cardCategory}>Categoria: {category}</Text>
      <Text style={styles.cardPrice}>{price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  card: {
    width: 140,
    marginRight: 15,
  },
  cardImage: {
    width: '100%',
    height: 100,
    borderRadius: 10,
  },
  cardTitle: {
    fontWeight: 'bold',
    marginTop: 5,
  },
  cardCategory: {
    fontSize: 12,
    color: '#666',
  },
  cardPrice: {
    fontSize: 14,
    color: '#000',
  },
});
