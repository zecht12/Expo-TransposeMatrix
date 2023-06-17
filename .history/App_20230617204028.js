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
    <>
    <SafeAreaView style={styles.container}>
    <View style={{ width: 300, height: 300, backgroundColor: '#10B981', position: 'absolute', borderRadius: 150, bottom: -72, right: -66 }}></View>
      <View style={{ width: 300, height: 300, backgroundColor: '#FFA500', position: 'absolute', borderRadius: 150, top: -72, left: -66 }}></View>
      <Text h4 style={styles.title}>3x3 Matrix Transpose Calculator</Text>
      <View style={styles.inputContainer}>
        {matrix.map((row, rowIndex) => (
          <View style={styles.row} key={rowIndex}>
            {row.map((col, colIndex) => (
              <Input
                key={colIndex}
                value={matrix[rowIndex][colIndex].toString()}
                onChangeText={(value) => handleInputChange(value, rowIndex, colIndex)}
                keyboardType="numeric"
                containerStyle={styles.input}
              />
            ))}
          </View
        ))}
      </View>
      <Button
        icon={<Icon name="calculator" size={20} color="white" />}
        title="Calculate Transpose"
        onPress={calculateTranspose}
        containerStyle={styles.buttonContainer}
      />
      {result && (
        <View style={styles.resultContainer}>
          <Text h4 style={styles.resultText}>Result:</Text>
          {result.map((row, rowIndex) => (
            <View style={styles.row} key={rowIndex}>
              {row.map((col, colIndex) => (
                <Input
                  key={colIndex}
                  value={result[rowIndex][colIndex].toString()}
                  editable={false}
                  containerStyle={styles.resultInput}
                />
              ))}
            </View>
          ))}
        </View>
      )}
    </SafeAreaView>
    </>
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
