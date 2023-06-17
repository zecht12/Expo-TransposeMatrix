import React, { useState } from 'react';
import { StyleSheet, View, SafeAreaView } from 'react-native';
import { Button, Input, Text } from 'react-native-elements';
import Icon from 'react-native-vector-icons/FontAwesome';
import { create, all } from 'mathjs';
const math = create(all);

export default function App() {
  const [matrix, setMatrix] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [result, setResult] = useState(null);

  const handleInputChange = (value, row, col) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[row][col] = parseFloat(value) || 0;
    setMatrix(updatedMatrix);
  };

  const calculateTranspose = () => {
    const transposedMatrix = math.transpose(matrix);
    setResult(transposedMatrix);
  };

  return (
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    position: 'relative',
    paddingHorizontal: 20,
    paddingVertical: 48,
    backgroundColor: '#fff',
  },
  title: {
    textAlign: 'center',
    marginBottom: 20,
  },
  inputContainer: {
    marginBottom: 20,
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  input: {
    flex: 1,
  },
  buttonContainer: {
    marginBottom: 20,
  },
  resultContainer: {
    marginBottom: 20,
  },
  resultText: {
    marginBottom: 10,
  },
  resultInput: {
    flex: 1,
  },
});
