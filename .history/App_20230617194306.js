import React, { useState } from 'react';
import { StyleSheet, View, Text, TextInput, TouchableOpacity } from 'react-native';
import math from 'mathjs';

export default function App() {
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);

  const updateValue = (value, row, col) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[row][col] = value;
    setMatrix(updatedMatrix);
  };

  const calculateTranspose = () => {
    const transposedMatrix = math.transpose(matrix);
    setMatrix(transposedMatrix);
  };

  return (
    <View style={styles.container}>
      <View style={styles.matrixContainer}>
        <Text>Input Matrix</Text>
        {matrix.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((col, colIndex) => (
              <TextInput
                key={colIndex}
                style={styles.input}
                onChangeText={(value) => updateValue(value, rowIndex, colIndex)}
                value={col.toString()}
                keyboardType="numeric"
              />
            ))}
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.button} onPress={calculateTranspose}>
        <Text>Calculate Transpose</Text>
      </TouchableOpacity>
      <View style={styles.matrixContainer}>
        <Text>Result</Text>
        {matrix.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((col, colIndex) => (
              <TextInput key={colIndex} style={styles.result} editable={false} value={col.toString()} />
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
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 50,
  },
  matrixContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  input: {
    borderWidth: 1,
    width: 50,
    height: 30,
    textAlign: 'center',
    margin: 5,
  },
  button: {
    alignItems: 'center',
    backgroundColor: '#DDDDDD',
    padding: 10,
    marginBottom: 20,
  },
  result: {
    borderWidth: 1,
    width: 50,
    height: 30,
    textAlign: 'center',
    margin: 5,
    backgroundColor: '#DDDDDD',
  },
});
