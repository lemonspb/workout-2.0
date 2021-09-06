import React,{useState} from 'react';
import { StyleSheet, Text,View, TextInput} from 'react-native';
import App from './App'
export default function Main() {
  return (
    <View style={styles.container}>
        <Text>пес</Text>
        <App/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',   
  },
  title:{
    paddingBottom: 100
  }
});