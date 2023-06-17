import React, { useState } from 'react';
import { View, StyleSheet } from 'react-native';
import { Button, Text } from 'react-native-elements';

export default function App{}) => {
  const [matrix, setMatrix] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);
  const [transpose, setTranspose] = useState([[0, 0, 0], [0, 0, 0], [0, 0, 0]]);

  const handleNumberPress = (row, col, value) => {
    const updatedMatrix = [...matrix];
    updatedMatrix[row][col] = value;
    setMatrix(updatedMatrix);
  };

  const handleTranspose = () => {
    const transposedMatrix = matrix.map((row, i) =>
      row.map((col, j) => matrix[j][i])
    );
    setTranspose(transposedMatrix);
  };

  return (
    <View style={styles.container}>
      <View style={styles.matrixContainer}>
        {matrix.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((col, j) => (
              <Button
                key={`${i}-${j}`}
                title={col.toString()}
                onPress={() => handleNumberPress(i, j, col + 1)}
              />
            ))}
          </View>
        ))}
      </View>

      <Button title="Calculate Transpose" onPress={handleTranspose} />

      <View style={styles.matrixContainer}>
        {transpose.map((row, i) => (
          <View key={i} style={styles.row}>
            {row.map((col, j) => (
              <Text key={`${i}-${j}`} style={styles.cell}>
                {col}
              </Text>
            ))}
          </View>
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  matrixContainer: {
    flexDirection: 'row',
    marginBottom: 10,
  },
  row: {
    flexDirection: 'row',
  },
  cell: {
    flex: 1,
    padding: 10,
    borderWidth: 1,
    borderColor: 'black',
    textAlign: 'center',
  },
});