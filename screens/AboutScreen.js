import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const AboutScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Sobre mí</Text>
      <Text style={styles.text}>
        Soy un desarrollador apasionado por crear aplicaciones móviles y web que marquen la diferencia. Tengo experiencia en React Native, React.js, Node.js y más.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    justifyContent: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 15,
  },
  text: {
    fontSize: 16,
    lineHeight: 24,
  },
});

export default AboutScreen;
