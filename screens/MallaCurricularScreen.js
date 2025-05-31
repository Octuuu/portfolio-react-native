import React from 'react';
import { View, Text, StyleSheet, FlatList, ScrollView } from 'react-native';

const MallaCurricularScreen = ({ route }) => {
  const { carrera } = route.params;

  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>
        <Text style={styles.title}>Malla Curricular de:</Text>
        <Text style={styles.carrera}>{carrera.nombre}</Text>

        <FlatList
          data={carrera.mallaCurricular}
          keyExtractor={(item) => item.semestre}
          scrollEnabled={false} // Importante para evitar conflicto de scroll dentro del ScrollView
          renderItem={({ item }) => (
            <View style={styles.semestreContainer}>
              <Text style={styles.semestre}>{item.semestre}</Text>
              {item.materias.map((materia, index) => (
                <Text key={index} style={styles.materia}>• {materia}</Text>
              ))}
            </View>
          )}
        />
      </View>
    </ScrollView>
  );
};

export default MallaCurricularScreen;

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: 'rgb(1,1,40)',
  },
  container: {
    padding: 20,
  },
  title: {
    fontSize: 24,
    color: 'white',
    marginBottom: 10,
    fontWeight: '600',
  },
  carrera: {
    fontSize: 20,
    color: '#00FFD1',
    fontWeight: 'bold',
    marginBottom: 20,
  },
  semestreContainer: {
    marginBottom: 25,
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 12,
    borderRadius: 10,
  },
  semestre: {
    color: '#FFB84D',
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  materia: {
    color: 'white',
    marginLeft: 10,
    marginBottom: 5,
    fontSize: 15,
  },
});
