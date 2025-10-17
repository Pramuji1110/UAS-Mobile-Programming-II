import React from 'react';
import { View, Text, StyleSheet, FlatList } from 'react-native';

const products = [
  { id: '01', name: 'Lampu CAHAYA 5W', desc: 'Lampu LED', price: 20000, stock: 11, date: '2025-08-13' },
  { id: '02', name: 'Lampu CAHAYA 9W', desc: 'Lampu LED', price: 25000, stock: 20, date: '2025-12-01' },
  { id: '03', name: 'Lampu CAHAYA 20W', desc: 'Lampu LED', price: 45000, stock: 6, date: '2025-02-02' },
];

export default function ProductListScreen() {
  return (
    <View style={styles.container}>
      <FlatList
        data={products}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.desc}</Text>
            <View style={styles.row}>
              <Text>ID: {item.id}</Text>
              <Text>Stock: {item.stock}</Text>
            </View>
            <Text>Harga: Rp{item.price.toLocaleString('id-ID')}</Text>
            <Text>{item.date}</Text>
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
  desc: { color: 'gray', marginBottom: 5 },
  row: { flexDirection: 'row', justifyContent: 'space-between' },
});
