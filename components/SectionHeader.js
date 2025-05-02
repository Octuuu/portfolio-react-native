import React from 'react';
import { Text, StyleSheet } from 'react-native';

const SectionHeader = ({ title }) => {
  return <Text style={styles.header}>{title}</Text>;
};

const styles = StyleSheet.create({
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
});

export default SectionHeader;
