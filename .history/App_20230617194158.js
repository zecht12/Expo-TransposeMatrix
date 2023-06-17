import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import math from 'mathjs';

export default function App() {
  const [matrix, setMatrix] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [result, setResult] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

  const handleChangeValue = (value, row, col) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[row][col] = value;
    setMatrix(updatedMatrix);
  };

  const handleCalculateTranspose = () => {
    const transposeMatrix = math.transpose(matrix);
    setResult(transposeMatrix);
  };

  return (
    <View style={styles.container}>
      <Text h4 style={styles.title}>Matrix Calculator</Text>
      <Text h5 style={styles.subtitle}>Input Matrix</Text>
      <View style={styles.matrixContainer}>
        {matrix.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((col, colIndex) => (
              <Input
                key={colIndex}
                value={matrix[rowIndex][colIndex].toString()}
                onChangeText={value => handleChangeValue(parseFloat(value), rowIndex, colIndex)}
                keyboardType="numeric"
                containerStyle={styles.inputContainer}
                inputStyle={styles.input}
              />
            ))}
          </View>
        ))}
      </View>
      <Button
        title="Calculate Transpose"
        onPress={handleCalculateTranspose}
        containerStyle={styles.buttonContainer}
      />
      <Text h5 style={styles.subtitle}>Result</Text>
      <View style={styles.matrixContainer}>
        {result.map((row, rowIndex) => (
          <View key={rowIndex} style={styles.row}>
            {row.map((col, colIndex) => (
              <Input
                key={colIndex}
                value={result[rowIndex][colIndex].toString()}
                disabled
                containerStyle={styles.inputContainer}
                inputStyle={styles.input}
              />
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
    padding: 20,
  },
  title: {
    marginBottom: 20,
  },
  subtitle: {
    marginTop: 20,
    marginBottom: 10,
  },
  matrixContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  inputContainer: {
    flex: 1,
  },
  input: {
    textAlign: 'center',
  },
  buttonContainer: {
    marginBottom: 20,
  },
});
