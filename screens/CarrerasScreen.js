import React from 'react';
import { View, Text, TouchableOpacity, FlatList, StyleSheet, Image } from 'react-native';

const carreras = [
  {
    id: '1',
    nombre: 'Profesorado en Educación Escolar Básica',
    img: require('../assets/carreras/carreras.jpg'),
    duracion: "6 semestres",
    modalidad: "presencial",
    titulo: "Profesor/a de Educación Escolar Básica 1.º y 2.º ciclo",
    mallaCurricular: [
      {
        semestre: "Primer Semestre",
        materias: [
          "Realidad Educativa Paraguaya",
          "Desarrollo Personal y Social",
          "Estrategias para la Comprensión en Castellano y Guaraní",
          "Estrategias para Mejorar Competencias de Cálculo"
        ]
      },
      {
        semestre: "Segundo Semestre",
        materias: [
          "Educación, Sociedad y Cultura",
          "Desarrollo Personal y Profesional",
          "Educación y Responsabilidad Ambiental",
          "Práctica Profesional",
          "Conocimiento del Sistema de las Lenguas Castellana y Guaraní para su Enseñanza",
          "Enseñanza de la Matemática I",
          "Taller de Arte y Expresión I",
          "Tecnologías de la Información y la Comunicación (TIC)",
          "Taller de Inglés I",
          "Optativa"
        ]
      },
      {
        semestre: "Tercer Semestre",
        materias: [
          "Desarrollo Humano y Aprendizaje",
          "Teorías de la Educación y del Aprendizaje I",
          "Práctica Profesional",
          "Didáctica de la Lengua Materna",
          "Enseñanza de la Matemática II",
          "Enseñanza del Cuidado del Cuerpo I",
          "Expresión Oral (Castellano y Guaraní)",
          "Taller de Inglés II",
          "Optativa"
        ]
      },
      {
        semestre: "Cuarto Semestre",
        materias: [
          "Sujetos de Aprendizaje, Diversidad e Inclusión",
          "Currículum, Enseñanza y Evaluación",
          "Práctica Profesional",
          "Taller de Arte y Expresión II",
          "Didáctica de Segunda Lengua y Lengua Extranjera",
          "Enseñanza de las Ciencias Sociales I",
          "Taller de Inglés III",
          "Redacción Creativa (Castellano y Guaraní)",
          "Optativa"
        ]
      },
      {
        semestre: "Quinto Semestre",
        materias: [
          "Teorías de la Educación y del Aprendizaje II",
          "Investigación Educativa",
          "Práctica Profesional",
          "Enseñanza del Cuidado del Cuerpo II",
          "Enseñanza de las Ciencias Sociales II",
          "Enseñanza de las Ciencias Naturales",
          "Taller de Inglés IV",
          "Producción de Recursos Educativos Audiovisuales (Castellano y Guaraní)",
          "Optativa"
        ]
      },
      {
        semestre: "Sexto Semestre",
        materias: [
          "Currículum, Enseñanza y Evaluación",
          "Marco Normativo de la Educación",
          "Práctica Profesional",
          "Taller de Arte y Expresión III",
          "Enseñanza de las Ciencias Naturales II",
          "Taller de Trabajo y Tecnología",
          "Redacción Instrumental (Castellano y Guaraní)",
          "Taller de Inglés V",
          "Optativa"
        ]
      }
    ]
  }
];

const CarrerasScreen = ({ navigation }) => {
  const irAMalla = (carrera) => {
    navigation.navigate('MallaCurricular', { carrera });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.sectionTitle}>Ofertas educativas</Text>
      <FlatList
        data={carreras}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.itemContainer}>
            <Image source={item.img} style={styles.imagen} />
            <Text style={styles.text}>{item.nombre}</Text>
            <TouchableOpacity style={styles.item} onPress={() => irAMalla(item)}>
              <Text style={styles.textLink}>Malla curricular</Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </View>
  );
};

export default CarrerasScreen;

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'rgb(1,1,40)', padding: 20 },
  itemContainer: {
    backgroundColor: 'rgba(255,255,255,0.05)',
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center',
  },
  text: {
    fontSize: 18,
    color: 'white',
    fontWeight: 'bold',
    marginTop: 30,
  },
  item: {
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    width: 150,
    marginBottom: 20,
  },
  textLink: {
    fontSize: 15,
    color: 'black',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  imagen: {
    width: '100%',
    height: 200,
    borderRadius: 3,
  },
  sectionTitle: {
    color: '#FFB84D',
    fontSize: 30,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 20,
  },
});
