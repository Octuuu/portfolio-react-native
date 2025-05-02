import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';
import experiences from '../constants/experiences';
import ExperienceCard from '../components/ExperienceCard';

const ExperienceScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Experiencia</Text>
      <FlatList
        data={experiences}
        renderItem={({ item }) => <ExperienceCard experience={item} />}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.list}
      />
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
  list: {
    paddingBottom: 20,
  },
});

export default ExperienceScreen;
