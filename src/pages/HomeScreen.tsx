import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation, useRoute, RouteProp } from '@react-navigation/native';

type HomeNavProp = NativeStackNavigationProp<RootStackParamList, 'Home'>;
type HomeRouteProp = RouteProp<RootStackParamList, 'Home'>;

export default function HomeScreen() {
  const navigation = useNavigation<HomeNavProp>();
  const route = useRoute<HomeRouteProp>();
  const { name } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.greeting}>Halo, Ahmad Indra Pramuji</Text>
      <Text style={styles.subtitle}>Silakan pilih menu</Text>

      <TouchableOpacity style={styles.buttonBlue} onPress={() => navigation.navigate('UserList')}>
        <Text style={styles.buttonText}>User List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonWhite} onPress={() => navigation.navigate('ProductList')}>
        <Text style={styles.buttonTextBlue}>Product List</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.buttonRed} onPress={() => navigation.navigate('Login')}>
        <Text style={styles.buttonText}>Logout</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20 },
  greeting: { fontSize: 18, fontWeight: 'bold' },
  subtitle: { color: 'gray', marginBottom: 20 },
  buttonBlue: { backgroundColor: '#007bff', padding: 12, borderRadius: 10, marginVertical: 8 },
  buttonWhite: { borderWidth: 1, borderColor: '#007bff', padding: 12, borderRadius: 10, marginVertical: 8 },
  buttonRed: { backgroundColor: '#dc3545', padding: 12, borderRadius: 10, marginVertical: 8 },
  buttonText: { color: 'white', fontWeight: 'bold', textAlign: 'center' },
  buttonTextBlue: { color: '#007bff', fontWeight: 'bold', textAlign: 'center' },
});
