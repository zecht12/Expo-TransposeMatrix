import React, { useState } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function App() {
  const [matrix, setMatrix] = useState('');
  const [transpose, setTranspose] = useState('');

  const calculateTranspose = () => {
    const rows = matrix.split('\n');
    const transposedRows = rows.map((row) => row.split(/\s+/).filter(Boolean));

    const transposedMatrix = transposedRows[0].map((_, columnIndex) =>
      transposedRows.map((row) => row[columnIndex])
    );

    const transposeString = transposedMatrix
      .map((row) => row.join('\t'))
      .join('\n');

    setTranspose(transposeString);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        multiline
        placeholder="Enter the matrix values (separated by spaces)"
        onChangeText={(text) => setMatrix(text)}
        value={matrix}
      />

      <TouchableOpacity style={styles.button} onPress={calculateTranspose}>
        <Text style={styles.buttonText}>Calculate Transpose</Text>
      </TouchableOpacity>

      <Text style={styles.transposeLabel}>Transpose Matrix:</Text>
      <Text style={styles.transposeText}>{transpose}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  input: {
    width: '100%',
    height: 100,
    borderWidth: 1,
    borderColor: '#ccc',
    marginBottom: 20,
    padding: 10,
  },
  button: {
    backgroundColor: '#007bff',
    padding: 10,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  transposeLabel: {
    fontWeight: 'bold',
    marginBottom: 10,
  },
  transposeText: {
    fontFamily: 'monospace',
    fontSize: 16,
  },
});
