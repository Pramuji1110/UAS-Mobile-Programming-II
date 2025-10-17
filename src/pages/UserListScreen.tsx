import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const users = [
  { name: 'Syahrian', email: 'syahrian@gmail.com' },
  { name: 'Guntur', email: 'guntur@gmail.com' },
  { name: 'Lia Marlina', email: 'Marlina@gmail.com' },
];

export default function UserListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={users}
        keyExtractor={(item) => item.email}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.email}>{item.email}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 15 },
  card: {
    backgroundColor: '#fff',
    padding: 12,
    borderRadius: 10,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: '#ddd',
  },
  name: { fontWeight: 'bold' },
  email: { color: 'gray' },
});
