import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';

export default function WelcomeScreen({ navigation }: any) {
  return (
    <View style={styles.container}>
      <Image source={require('../../assets/Logo.png')} style={styles.logo} />

      <Text style={styles.title}>
        Descubra, colecione e personalize o seu mundo nerd
      </Text>

      <Image
        source={require('../../assets/Herois.png')}
        style={styles.illustration}
        resizeMode="contain"
      />

      <TouchableOpacity
        style={styles.button}
        onPress={() => navigation.navigate('Home')}
      >
        <Text style={styles.buttonText}>Entrar na sua coleção</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-around',
    padding: 20,
    backgroundColor: '#fff',
  },
  logo: {
    width: 100,
    height: 100,
    marginTop: 40,
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
  },
  illustration: {
    width: '100%',
    height: 250,
  },
  button: {
    backgroundColor: '#6C4EE3',
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 30,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 16,
  },
});
