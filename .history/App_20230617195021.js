import React, { useState } from 'react';
import { View, StyleSheet, Text, TextInput, TouchableOpacity, SafeAreaView } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { evaluate } from 'mathjs';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  input: {
    borderWidth: 1,
    borderColor: 'gray',
    paddingHorizontal: 10,
    flex: 1,
    marginHorizontal: 5,
  },
  resultContainer: {
    marginBottom: 20,
  },
  resultLabel: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  resultValue: {
    fontSize: 20,
    marginBottom: 10,
  },
  transposeButton: {
    backgroundColor: 'blue',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 5,
  },
  transposeButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

const App = () => {
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [transpose, setTranspose] = useState(null);

  const handleInputChange = (value, row, col) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[row][col] = value;
    setMatrix(updatedMatrix);
  };

  const calculateTranspose = () => {
    const matrixData = matrix.flat().join(','); // Convert matrix to comma-separated string
    const result = evaluate(`transpose([${matrixData}])`); // Use math.js to calculate transpose
    setTranspose(result);
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar style="auto" />
      <View style={styles.inputContainer}>
        {matrix.map((row, rowIndex) => (
          <View key={rowIndex} style={{ flexDirection: 'column' }}>
            {row.map((col, colIndex) => (
              <TextInput
                key={colIndex}
                style={styles.input}
                keyboardType="numeric"
                onChangeText={(value) => handleInputChange(value, rowIndex, colIndex)}
                value={col}
              />
            ))}
          </View>
        ))}
      </View>
      <TouchableOpacity style={styles.transposeButton} onPress={calculateTranspose}>
        <Text style={styles.transposeButtonText}>Calculate Transpose</Text>
      </TouchableOpacity>
      {transpose && (
        <View style={styles.resultContainer}>
          <Text style={styles.resultLabel}>Transpose:</Text>
          {transpose.map((row, rowIndex) => (
            <Text key={rowIndex} style={styles.resultValue}>
              {row.join(' ')}
            </Text>
          ))}
        </View>
      )}
    </SafeAreaView>
  );
};

export default App;
