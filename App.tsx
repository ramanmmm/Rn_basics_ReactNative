import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, SafeAreaView } from 'react-native';
import FlatCards from './component/FlatCards';
import Elavated from './component/Elavated';
import FancyCard from './component/FancyCard';
import CharacterCard from './component/CharacterCard';

export class App extends Component {
  render() {
    return (
      <SafeAreaView style={styles.safeArea}>
        <ScrollView style={styles.container}>
          <FlatCards />
          <Elavated />
          <FancyCard />
          <CharacterCard />
        </ScrollView>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  container: {
    flex: 1,
    padding: 12,
  },
});

export default App;