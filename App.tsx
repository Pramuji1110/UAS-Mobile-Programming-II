import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from './src/pages/LoginScreen';
import HomeScreen from './src/pages/HomeScreen';
import UserListScreen from './src/pages/UserListScreen';
import ProductListScreen from './src/pages/ProductListScreen';

export type RootStackParamList = {
  Login: undefined;
  Home: { name: string; email: string };
  UserList: undefined;
  ProductList: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Login">
        <Stack.Screen 
          name="Login" 
          component={LoginScreen} 
          options={{ headerShown: false }} 
        />
        <Stack.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{ title: 'Home' }} 
        />
        <Stack.Screen 
          name="UserList" 
          component={UserListScreen} 
          options={{ title: 'User List' }} 
        />
        <Stack.Screen 
          name="ProductList" 
          component={ProductListScreen} 
          options={{ title: 'List Product' }} 
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
