import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Calculator } from 'react-native-calculator';
import math from 'mathjs';

export default function App() {
  const [matrix, setMatrix] = useState([
    ['', '', ''],
    ['', '', ''],
    ['', '', ''],
  ]);
  const [result, setResult] = useState('');

  const handlePress = (value) => {
    setResult('');
  
    if (value === '=') {
      if (isValidMatrix(matrix)) {
        const transpose = math.transpose(matrix);
        setResult(JSON.stringify(transpose));
      } else {
        setResult('Invalid matrix');
      }
    } else if (!isNaN(value)) {
      const updatedMatrix = matrix.map((row) =>
        row.map((cell) => (cell === '' ? value : cell))
      );
      setMatrix(updatedMatrix);
    }
  };
  
  const isValidMatrix = (matrix) => {
    return (
      matrix.length === 3 &&
      matrix.every((row) => row.length === 3) &&
      matrix.flat().every((cell) => !isNaN(cell))
    );
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Matrix Transpose Calculator</Text>

      <View style={styles.matrixContainer}>
        {matrix.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((cell, colIndex) => (
              <TouchableOpacity
                style={styles.cell}
                key={colIndex}
                onPress={() => handlePress(cell)}
              >
                <Text style={styles.cellText}>{cell}</Text>
              </TouchableOpacity>
            ))}
          </View>
        ))}
      </View>

      <View style={styles.resultContainer}>
        <Text style={styles.result}>{result}</Text>
      </View>

      <View style={styles.calculatorContainer}>
        <Calculator
          onCalculationResult={(value) => handlePress(value)}
          onCalculationError={() => setResult('Invalid expression')}
          style={styles.calculator}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  matrixContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  cell: {
    width: 50,
    height: 50,
    backgroundColor: '#f0f0f0',
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 5,
  },
  cellText: {
    fontSize: 16,
  },
  resultContainer: {
    marginBottom: 20,
  },
  result: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  calculatorContainer: {
    width: '80%',
    height: 400,
  },
  calculator: {
    flex: 1,
  },
});
