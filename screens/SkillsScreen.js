import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import skills from '../constants/skills';
import SkillBadge from '../components/SkillBadge';

const SkillsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Habilidades</Text>
      <View style={styles.badgesContainer}>
        {skills.map((skill) => (
          <SkillBadge key={skill} skill={skill} />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  badgesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
});

export default SkillsScreen;
