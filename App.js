import { StatusBar } from 'expo-status-bar';
import { Pressable, StyleSheet, Text, View, TextInput } from 'react-native';
import { useState } from 'react';

function calcBmi(height, weight) {
  return weight / (height * height) * 10000;
}

export default function App() {
  const [height, setHeight] = useState('');
  const [weight, setWeight] = useState('');
  const [bmi, setBmi] = useState('');
  function startCalc() {
    let result = calcBmi(height, weight);
    setBmi(result);
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Testtömegindex számolás</Text>
      <StatusBar style="auto" />
      
      <Text style={styles.text}>Magasság (cm)</Text>
      <TextInput
      style={styles.input}
      onChangeText={height => setHeight(height)}
      />

      <Text style={styles.text}>Testsúly (kg)</Text>
      <TextInput
      style={styles.input}
      onChangeText={weight => setWeight(weight)}
      />
      <Text style={styles.text}>Testtömegindex: {bmi}</Text>

      
      <Pressable style={styles.button}>
        <Text onPress={startCalc}>
          Számol
        </Text>
      </Pressable>
    </View>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'beige',
    alignItems: 'center',
    justifyContent: 'center',
  },

  header: {
    fontSize: 30,
    fontFamily: 'bold',
    paddingBottom: '20px',
  },

  button: {
    backgroundColor: 'cyan',
    marginTop: 10,
    padding: 10,
    borderRadius: 3,
  },

  input: {
    backgroundColor: 'white',
    height: 30,
    fontFamily: 'bold',
  },

  text: {
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 22,
  }
});
