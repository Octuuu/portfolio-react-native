import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Ionicons } from '@expo/vector-icons';

import HomeScreen from '../screens/HomeScreen';
import AboutScreen from '../screens/AboutScreen';
import ProjectsScreen from '../screens/ProjectsScreen';
import SkillsScreen from '../screens/SkillsScreen';
import ContactScreen from '../screens/ContactScreen';

const Tab = createBottomTabNavigator();

const AppNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ color, size }) => {
          let iconName;

          switch (route.name) {
            case 'Inicio':
              iconName = 'home-outline';
              break;
            case 'Sobre mí':
              iconName = 'person-outline';
              break;
            case 'Proyectos':
              iconName = 'code-slash-outline';
              break;
            case 'Habilidades':
              iconName = 'construct-outline';
              break;
            case 'Contacto':
              iconName = 'mail-outline';
              break;
            default:
              iconName = 'ellipse-outline';
          }

          return <Ionicons name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#3498db',
        tabBarInactiveTintColor: 'gray',
      })}
    >
      <Tab.Screen name="Inicio" component={HomeScreen} />
      <Tab.Screen name="Sobre mí" component={AboutScreen} />
      <Tab.Screen name="Proyectos" component={ProjectsScreen} />
      <Tab.Screen name="Habilidades" component={SkillsScreen} />
      <Tab.Screen name="Contacto" component={ContactScreen} />
    </Tab.Navigator>
  );
};

export default AppNavigator;
