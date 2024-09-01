import {Text, StyleSheet, View, ScrollView} from 'react-native';
import React, {Component} from 'react';

export default class Elavated extends Component {
  render() {
    return (
      <View>
        <Text style={styles.headingText}>Elavated</Text>
        <ScrollView horizontal={true} style={styles.container}>
          <View style={[styles.card,styles.CardElevater]}>
            <Text>Tap</Text>
          </View>
          <View style={[styles.card,styles.CardElevater]}>
            <Text>me</Text>
          </View>
          <View style={[styles.card,styles.CardElevater]}>
            <Text>for</Text>
          </View>
          <View style={[styles.card,styles.CardElevater]}>
            <Text>more</Text>
          </View>
          <View style={[styles.card,styles.CardElevater]}>
            <Text>and</Text>
          </View>
          <View style={[styles.card,styles.CardElevater]}>
            <Text>more.....</Text>
          </View>

          <View style={[styles.card,styles.CardElevater]}>
            <Text>🤪</Text>
          </View>
          <View style={[styles.card,styles.CardElevater]}>
            <Text>still doing 😝</Text>
          </View>
        </ScrollView>
      </View>
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
  CardElevater:{
    backgroundColor:'#DBA011',
    elevation:4,
    shadowOffset:{
        width:1,
        height:1,
    },
    shadowColor:'#de0001',
    shadowOpacity:0.7,
    shadowRadius:2,
  }
});
