import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import GovtChild from './src/GovtChild';
import Govt from './src/Govt';
import Test2 from './src/Test2';

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.box}>
        <Text style={styles.text}>welcome!!!</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'plum',
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 300,
    height: 300,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    borderBlockColor: 'black',
    borderBottomWidth: 10,
    borderTopWidth: 10,
    borderRightWidth: 10,
    borderLeftWidth: 10,
  },
  text: {
    color: 'black',
    fontWeight: 'bold',
    fontSize: 30,
  },
});

export default App;
