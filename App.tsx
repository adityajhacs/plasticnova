import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      
      <Text style={styles.title}>♻️ Plastic Nova</Text>
      <Text style={styles.subtitle}>Turn Waste into Worth</Text>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🧱 Ecobricks</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🚮 Report Garbage</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🛍 Marketplace</Text>
      </TouchableOpacity>

      <TouchableOpacity style={styles.button}>
        <Text style={styles.buttonText}>🤝 NGO Connect</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0f172a',
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 30,
    color: '#22c55e',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 16,
    color: '#cbd5f5',
    marginBottom: 30,
  },
  button: {
    backgroundColor: '#22c55e',
    padding: 15,
    marginVertical: 8,
    width: '80%',
    borderRadius: 10,
  },
  buttonText: {
    textAlign: 'center',
    color: '#000',
    fontSize: 16,
    fontWeight: 'bold',
  },
});