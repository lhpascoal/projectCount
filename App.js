import React, { useState } from "react";
import { StyleSheet, Text, TouchableOpacity, SafeAreaView } from "react-native";
// import Contador from './src/contador'

const App = () => {

  const [count, setCount] = useState(0)
  const onPressMais = () => setCount(prevCount => prevCount + 1)
  const onPressMenos = () => setCount(prevCount => prevCount - 1)
  // const onPressMaisMais = () => setInterval(() => setCount(prevCount => prevCount + 1), 100)
  // const onPressMenosMenos = () =>  setInterval(() => setCount(prevCount => prevCount - 1), 1000)


  function startIntervalMais() {
    timer = setInterval(() => setCount(prevCount => prevCount + 1), 100)
  }

  function stopIntervalMais() {
    clearInterval(timer)
  }
 
  function startIntervalMenos() {
    timer = setInterval(() => setCount(prevCount => prevCount - 1), 100)
  }

  function stopIntervalMenos() {
    clearInterval(timer)
  }

  return (
    <SafeAreaView style={styles.container}>
      <SafeAreaView style={styles.countContainer}>
        <Text style={styles.textoBotao}>{count}</Text>
      </SafeAreaView>
      <TouchableOpacity
        style={styles.button}
        onPress={onPressMais}
        onLongPress={startIntervalMais}
        onPressOut={stopIntervalMais}

      >
        <Text>ADICIONE 1</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={styles.button}
        onPress={onPressMenos}
        onLongPress={startIntervalMenos}
        onPressOut={stopIntervalMenos}
      >
        <Text>RETIRE 1</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    paddingHorizontal: 10,
    backgroundColor: '#000000'
  },
  button: {
    alignItems: "center",
    backgroundColor: "#01DF74",
    padding: 10,
    borderRadius: 30,
    margin:10    
  },
  countContainer: {
    alignItems: "center",
    padding: 10
  },
  textoBotao:{
    fontSize: 50,
    color: '#01DF74'
  },
});

export default App;