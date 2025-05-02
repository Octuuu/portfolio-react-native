import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';

const ProjectCard = ({ project }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: project.image }} style={styles.image} />
      <Text style={styles.title}>{project.title}</Text>
      <Text style={styles.description}>{project.description}</Text>
      {project.link && (
        <TouchableOpacity onPress={() => Linking.openURL(project.link)}>
          <Text style={styles.link}>Ver proyecto</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    borderRadius: 12,
    padding: 16,
    marginBottom: 16,
    elevation: 2,
  },
  image: {
    width: '100%',
    height: 150,
    borderRadius: 8,
    marginBottom: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 15,
    marginVertical: 8,
  },
  link: {
    color: '#3498db',
    fontWeight: 'bold',
  },
});

export default ProjectCard;
