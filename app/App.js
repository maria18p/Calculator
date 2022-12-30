import React from 'react';
import { View, Text, Button, TouchableOpacity, StyleSheet } from 'react-native';

export default function Calculator() {
  const digits = () => {
    const generateDigits = [];
    for (let i = 0; i < 10; i++) {
      generateDigits.push(
        <Button
          title='i'
          key={i}
          style={{ flex: '1 1 33.333%', maxWidth: '33.333%', backgroundColor: '#465362' }}>
          {i}
        </Button>,
      );
    }
    return generateDigits;
  };

  return (
    <View style={StyleSheet.container}>
      <View style={styles.calculator}>
        <View style={styles.output}></View>
        <View style={styles.operators}>
          <Button title='plus' style={styles.buttonContainer}>
            +
          </Button>
          <Button title='minus' style={styles.buttonContainer}>
            -
          </Button>
          <Button title='mult' style={styles.buttonContainer}>
            *
          </Button>
          <Button title='div' style={styles.buttonContainer}>
            /
          </Button>
          <Button title='clear' style={styles.buttonContainer}>
            C
          </Button>
        </View>
        <View style={styles.digits}>
          <Button title='equals' style={styles.buttonContainer}>
            =
          </Button>
          {digits()}
          {/* <View> <Button>0</Button> </View> */}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    margin: 0,
    padding: 0,
    backgroundColorq: '#183059',
  },
  app: {
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  calculator: {
    width: '100%',
    maxWidth: '350px',
    backgroundColor: '#276FBF',
    borderRadius: 20,
  },
  output: {
    padding: 15,
    textAlign: 'right',
    backgroundColor: '#F03A47',
    color: '#F6F4F3',
    fontSize: 24,
    fontWeight: 500,
  },
  operators: {
    display: 'flex',
    fontWeight: 500,
  },
  digits: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  buttonContainer: {
    color: '#317B22',
    fontSize: 20,
    padding: 16,
  },
});
