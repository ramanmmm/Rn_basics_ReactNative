import {Text, StyleSheet, View, SafeAreaView} from 'react-native';
import React, {Component} from 'react';

export default class FlatCards extends Component {
  render() {
    return (
      <SafeAreaView>
        <View>
          <Text style={styles.headingText}>FlatCards</Text>
          <View style={styles.container}>
            <View style={[styles.card, styles.cardOne]}>
              <Text>Red</Text>
            </View>
            <View style={[styles.card, styles.cardtwo]}>
              <Text>Yellow</Text>
            </View>
            <View style={[styles.card, styles.cardThree]}>
              <Text>Pink</Text>
            </View>
            <View style={[styles.card, styles.cardfour]}>
              <Text>blue</Text>
            </View>
        
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    padding: 8,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    width: 100,
    height: 100,
    borderRadius: 8,
    margin: 8,
  },
  cardOne: {
    backgroundColor: '#fc0f03',
  },
  cardtwo: {
    backgroundColor: '#fcc203',
  },
  cardThree: {
    backgroundColor: '#b103fc',
  },
  cardfour: {
    backgroundColor: '#0b03fc',
  },
});
