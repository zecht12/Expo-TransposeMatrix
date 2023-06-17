import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const handleValueChange = (rowIndex, colIndex, value) => {
    const newMatrix = [...matrix];
    newMatrix[rowIndex][colIndex] = value;
    setMatrix(newMatrix);
  };

  const handleTranspose = () => {
    const transposedMatrix = [
      [matrix[0][0], matrix[1][0], matrix[2][0]],
      [matrix[0][1], matrix[1][1], matrix[2][1]],
      [matrix[0][2], matrix[1][2], matrix[2][2]],
    ];
    setMatrix(transposedMatrix);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.header}>Matrix Transpose Calculator</Text>

      <View style={styles.matrixContainer}>
        {matrix.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.rowContainer}>
            {row.map((col, colIndex) => (
              <TextInput
                key={colIndex}
                style={styles.input}
                keyboardType="numeric"
                value={col}
                onChangeText={(value) => handleValueChange(rowIndex, colIndex, value)}
              />
            ))}
          </View>
        ))}
      </View>

      <TouchableOpacity style={styles.button} onPress={handleTranspose}>
        <Text style={styles.buttonText}>Calculate Transpose</Text>
      </TouchableOpacity>

      <Text style={styles.resultText}>Result:</Text>

      <View style={styles.resultMatrix}>
        {matrix.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.rowContainer}>
            {row.map((col, colIndex) => (
              <Text key={colIndex} style={styles.resultCol}>{col}</Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#fff',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  matrixContainer: {
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
    width: 80,
  },
  button: {
    backgroundColor: '#2196F3',
    paddingVertical: 12,
    paddingHorizontal: 24,
    borderRadius: 5,
    marginBottom: 20,
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  resultText: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  resultMatrix: {
    marginBottom: 20,
  },
  resultCol: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 5,
    padding: 8,
    marginRight: 10,
    width: 80,
    textAlign: 'center',
  },
});
