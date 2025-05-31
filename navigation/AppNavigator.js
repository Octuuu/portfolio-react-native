import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { Feather } from '@expo/vector-icons';

import CarrerasScreen from '../screens/CarrerasScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ContactScreen from '../screens/ContactScreen';
import MallaCurricularScreen from '../screens/MallaCurricularScreen';
import HomeScreen from '../screens/HomeScreen'

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

const TabNavigator = () => (
  <Tab.Navigator
    screenOptions={({ route }) => ({
      tabBarIcon: ({ color, size }) => {
        let iconName;
        let IconComponent = Ionicons;

        switch (route.name) {
          case 'Inicio':
            iconName = 'home-outline';
            break;
          case 'Carreras':
            iconName = 'graduation-cap';
            IconComponent = FontAwesome;
            break;
          case 'Informacion':
            iconName = 'info';
            IconComponent = Feather;
            break;
          case 'Docentes':
            iconName = 'people-outline';
            break;
          case 'Proyectos':
            iconName = 'folder-open-outline';
            break;
          default:
            iconName = 'ellipse-outline';
        }

        return <IconComponent name={iconName} size={size} color={color} />;
      },
      headerStyle: {
        backgroundColor: 'rgb(1,1,40)',
        borderBottomColor: 'black',
      },
      headerTitleStyle: {
        fontWeight: 'bold',
        fontSize: 20,
      },
      headerTintColor: 'white',
      tabBarActiveTintColor: '#3498db',
      tabBarInactiveTintColor: 'rgb(232, 232, 235)',
      tabBarStyle: {
        backgroundColor: 'rgb(1,1,40)',
        height: 60,
        borderTopColor: 'rgb(37, 37, 62)',
      },
    })}
  >
    <Tab.Screen name="Inicio" component={HomeScreen} />
    <Tab.Screen name="Carreras" component={CarrerasScreen} />
    <Tab.Screen name="Informacion" component={ProjectsScreen} />
    <Tab.Screen name="Docentes" component={SkillsScreen} />
    <Tab.Screen name="Proyectos" component={ContactScreen} />
  </Tab.Navigator>
);

const AppNavigator = () => {
  return (
    <Stack.Navigator>
  
      <Stack.Screen
        name="MainTabs"
        component={TabNavigator}
        options={{ headerShown: false }}
      />
      
      <Stack.Screen
        name="MallaCurricular"
        component={MallaCurricularScreen}
        options={{
          title: 'Malla Curricular',
          headerStyle: {
            backgroundColor: 'rgb(1,1,40)',
          },
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
            fontSize: 20,
          },
        }}
      />
    </Stack.Navigator>
  );
};

export default AppNavigator;
