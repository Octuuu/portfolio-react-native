import React from 'react';
import { Text, StyleSheet, View } from 'react-native';

const SkillBadge = ({ skill }) => {
  return (
    <View style={styles.badge}>
      <Text style={styles.text}>{skill}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  badge: {
    backgroundColor: '#e0f0ff',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    margin: 5,
  },
  text: {
    fontSize: 14,
    color: '#007acc',
  },
});

export default SkillBadge;
