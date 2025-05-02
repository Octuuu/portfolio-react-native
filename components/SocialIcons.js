import React from 'react';
import { View, TouchableOpacity, Linking, StyleSheet } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const SocialIcons = () => {
  const openLink = (url) => Linking.openURL(url);

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => openLink('https://github.com/tuusuario')}>
        <FontAwesome name="github" size={28} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://linkedin.com/in/tuusuario')}>
        <FontAwesome name="linkedin" size={28} style={styles.icon} />
      </TouchableOpacity>
      <TouchableOpacity onPress={() => openLink('https://twitter.com/tuusuario')}>
        <FontAwesome name="twitter" size={28} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
  },
  icon: {
    color: '#444',
    marginHorizontal: 10,
  },
});

export default SocialIcons;
