import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, SafeAreaView } from 'react-native';

export default class Calculator extends React.Component {
  constructor() {
    super();
    this.opers = ['+', '-', '*', '/', 'C'];
    this.state = {
      validAction: '',
      txtCalc: '',
    };
  }

  result() {
    const txtResult = this.state.validAction;
    this.setState({ txtCalc: eval(txtResult) });
  }

  action(next) {
    const lastOfIndex = this.state.validAction.split('').pop();

    if (next == '=') {
      if (this.opers.includes(lastOfIndex)) return;
      return this.result();
    }
    this.setState({ validAction: this.state.validAction + next });
  }

  clear() {
    let res = this.state.validAction.split('');
    res.pop();
    res.join('');
    this.setState({ validAction: res.join('') });
    this.setState({ txtCalc: '' });
  }

  chooseAction(op) {
    switch (op) {
      case 'C':
        this.clear();
        break;
      case '+':
        this.clear();
      case '-':
        this.clear();
      case '*':
        this.clear();
      case '.':
        this.clear();
      case '/':
        const lastOfIndex = this.state.validAction.split('').pop();

        if (this.opers.indexOf(lastOfIndex) != -1 || this.state.validAction == '') return;

        this.setState({ validAction: this.state.validAction + op });
    }
  }

  render() {
    let signOperation = [];
    for (let i = 0; i < this.opers.length; i++) {
      signOperation.push(
        <TouchableOpacity
          key={this.opers[i]}
          onPress={() => this.chooseAction(this.opers[i])}
          style={styles.btn}>
          <Text style={[styles.btnText, styles.light]}>{this.opers[i]}</Text>
        </TouchableOpacity>,
      );
    }
    let buildRows = [];
    let array = [
      [7, 8, 9],
      [4, 5, 6],
      [1, 2, 3],
      [0, '.', '='],
    ];
    for (let k = 0; k < 4; k++) {
      let temp = [];
      for (let kk = 0; kk < 3; kk++) {
        temp.push(
          <TouchableOpacity
            key={array[k][kk]}
            onPress={() => this.action(array[k][kk])}
            style={styles.btn}>
            <Text style={styles.btnText}>{array[k][kk]}</Text>
          </TouchableOpacity>,
        );
      }
      buildRows.push(
        <View key={k} style={styles.row}>
          {temp}
        </View>,
      );
    }

    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.result}>
          <Text style={styles.txtRes}>{this.state.validAction || 0}</Text>
          <View style={styles.calculator}>
            <Text style={styles.txtCalculate}>{this.state.txtCalc}</Text>
          </View>
        </View>

        <View style={styles.btns}>
          <View style={styles.digits}>{buildRows}</View>
          <View style={styles.operators}>{signOperation}</View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  result: {
    flex: 2,
    backgroundColor: '#F4F7F5',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingEnd: 20,
    padding: 25,
  },
  txtRes: {
    fontSize: 40,
    color: '#F7CB15',
  },
  calculator: {
    flex: 1,
    backgroundColor: '#F4F7F5',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  txtCalculate: {
    fontSize: 45,
    color: '#222823',
  },
  btns: {
    flexDirection: 'row',
    flex: 7,
  },
  operators: {
    flex: 1,
    backgroundColor: '#011502',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  digits: {
    backgroundColor: '#F4F7F5',
    flex: 3,
  },
  row: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  btn: {
    flex: 1,
    alignItems: 'stretch',
    alignself: 'stretch',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnText: {
    fontSize: 30,
  },
  light: {
    color: '#F4F7F5',
  },
});
