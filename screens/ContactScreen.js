import React from 'react';
import { View, Text, Linking, StyleSheet, TouchableOpacity } from 'react-native';
import SocialIcons from '../components/SocialIcons';

const ContactScreen = () => {
  const handleEmailPress = () => {
    Linking.openURL('mailto:tucorreo@ejemplo.com');
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Contacto</Text>
      <Text style={styles.text}>¿Quieres trabajar conmigo o tienes alguna consulta?</Text>

      <TouchableOpacity onPress={handleEmailPress}>
        <Text style={styles.email}>tucorreo@ejemplo.com</Text>
      </TouchableOpacity>

      <SocialIcons />
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
    marginBottom: 10,
  },
  text: {
    fontSize: 16,
    marginBottom: 20,
  },
  email: {
    color: '#3498db',
    fontSize: 16,
    marginBottom: 20,
  },
});

export default ContactScreen;
