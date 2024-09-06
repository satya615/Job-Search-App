import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Profile from '../components/header/Profile';
import Index from './index';  // Ensure the component is named correctly
import About from './About';
import { Feather } from '@expo/vector-icons';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();

const _layout = () => {
  return (
  
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          animation: 'slide_from_right',
          headerShadowVisible: false,
          headerStyle: { backgroundColor: 'orange',
            
           },
          headerTintColor:'white',
        }}
      >
        <Stack.Screen
          name="index"
          component={Index}  // Correctly link the component
          options={{
            headerTitleAlign: 'left',
            title: 'Job Search',
            headerRight: () => <Profile />,
            
           
          }}
        />
        <Stack.Screen
          name="About"
          component={About}  // Correctly link the component
        />
      </Stack.Navigator>
   
  );
};

export default _layout;

const styles = StyleSheet.create({});
