import React from 'react';
import { View, Text, StyleSheet, Image, Dimensions, ScrollView } from 'react-native';

const { height: screenHeight } = Dimensions.get('window');

const HomeScreen = () => {
  return (
    <ScrollView style={styles.scroll}>
      <View style={styles.container}>

        <View style={styles.sectionHeader}>
          <Image
            source={require('../assets/logoifd2.webp')}
            style={styles.imagen}
          />
          <Text style={styles.title}>Formación</Text>
          <Text style={styles.title}>Docente</Text>

          <Text style={styles.frase}>"El objetivo de la educación es crear personas capaces de hacer cosas nuevas, no solamente repetir lo que otras generaciones hacen"</Text>
        </View>

        <Text style={styles.sectionTitle}>Visión</Text>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Institución de Educación, reconocida por su solvencia académica para la formación y el acompañamiento docente cuyos profesionales tengan una sólida cualificación en gestión participativa, innovación, interacción con el contexto social y ecológico.
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Misión</Text>
        <View style={styles.section}>
          <Text style={styles.sectionText}>
            Preparar docentes críticos, creativos, con principios éticos, abiertos a los desafíos, conocimientos científicos, tecnológicos y comprometidos con la innovación y la creatividad características propias de la pedagogía del siglo XXI.
          </Text>
        </View>

      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scroll: {
    flex: 1,
    backgroundColor: 'rgb(1,1,40)',
  },
  frase: {
    height: 30,
    fontWeight: '700',
    color: 'white',
    textAlign: 'center',
    marginTop: 100,
  },
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: 'rgb(1,1,40)',
  },
  sectionHeader: {
    alignItems: 'center',
    justifyContent: 'center',
    height: screenHeight * 0.9,
  },
  imagen: {
    width: 180,
    height: 180,
    marginBottom: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: '900',
    color: 'white',
  },
  section: {
    minHeight: screenHeight * 0.4,
    justifyContent: 'center',
  },
  sectionTitle: {
    fontSize: 50,
    fontWeight: '900',
    color: '#FFB84D',
    marginBottom: -60,
    textAlign: 'center',
  },
  sectionText: {
    fontSize: 16,
    color: 'rgb(198, 203, 211)',
    marginLeft: 10,
    fontWeight: '300',
    backgroundColor: 'rgba(255,255,255,0.05)',
    padding: 20,
    borderRadius: 10,
    borderColor: 'rgba(255,255,255,0.05)',
    borderWidth: 0.4,
  },
});

export default HomeScreen;
