import React, { useState } from 'react';
import { StyleSheet, View } from 'react-native';
import { Button, Text } from 'react-native-elements';
import CalculatorInput from 'react-native-calculator-input';
import math from 'mathjs';

export default function App() {
  const [matrix, setMatrix] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [transpose, setTranspose] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

  const calculateTranspose = () => {
    const transposedMatrix = math.transpose(matrix);
    setTranspose(transposedMatrix);
  };

  const handleValueChange = (value, rowIndex, colIndex) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[rowIndex][colIndex] = value;
    setMatrix(updatedMatrix);
  };

  return (
    <View style={styles.container}>
      <Text h4>Enter the values for a 3x3 matrix:</Text>
      <View style={styles.matrixContainer}>
        {matrix.map((row, rowIndex) => (
          <View style={styles.rowContainer} key={rowIndex}>
            {row.map((col, colIndex) => (
              <CalculatorInput
                key={colIndex}
                initialValue={col}
                onChange={(value) => handleValueChange(value, rowIndex, colIndex)}
              />
            ))}
          </View>
        ))}
      </View>
      <Button
        title="Calculate Transpose"
        onPress={calculateTranspose}
        style={styles.button}
      />
      <Text h4>Transpose Matrix:</Text>
      <View style={styles.matrixContainer}>
        {transpose.map((row, rowIndex) => (
          <View style={styles.rowContainer} key={rowIndex}>
            {row.map((col, colIndex) => (
              <Text style={styles.matrixCell} key={colIndex}>
                {col}
              </Text>
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
  matrixContainer: {
    marginTop: 10,
    marginBottom: 20,
  },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  matrixCell: {
    padding: 10,
    borderWidth: 1,
    borderColor: '#000',
  },
  button: {
    marginTop: 20,
  },
});
