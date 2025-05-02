import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';
import projects from '../constants/projects';
import ProjectCard from '../components/ProjectCard';

const ProjectsScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Mis Proyectos</Text>
      <FlatList
        data={projects}
        renderItem={({ item }) => <ProjectCard project={item} />}
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
    marginBottom: 12,
  },
  list: {
    paddingBottom: 20,
  },
});

export default ProjectsScreen;
