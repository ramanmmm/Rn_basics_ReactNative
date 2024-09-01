import { Text, StyleSheet, View, Image } from 'react-native'
import React, { Component } from 'react'

export default class FancyCard extends Component {
  render() {
    return (
      <View >
        <Text style={styles.headingText}>Tranding Places</Text>
        <View style={[styles.card,styles.cardElevated]}>
            <Image
             source={{
                uri: 'https://buffer.com/library/content/images/size/w1200/2023/10/free-images.jpg'
             }}
             style={styles.cardImage}
            />
            <View style={styles.cardBody}>
            <Text style={styles.CardTitle}>PhotoGraphy of Nature</Text>
            <Text style={styles.CardLable}>PhotoGraphy</Text>
            <Text style={styles.CardDiscription}>PhotoGraphy is a passion for many youngesters and show there skills by using it</Text>
            <Text style={styles.CardFooter}>10 min Ago</Text>
            </View>

          </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16, // Add space between the heading and the card
  },
  container: {
    padding: 16, // Add padding to the container
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 8,
    padding:4,
    overflow: 'hidden', // Ensure the image doesn't overflow the card's bounds
  },
  cardElevated: {
    backgroundColor: '#D0dd10',
    elevation: 4,
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowColor: '#de0001',
    shadowOpacity: 0.7,
    shadowRadius: 2,
  },
  cardImage: {
    height: 180,
    width: '100%', // Make the image take up the full width of the card
  },
  cardBody:{},
  CardTitle:{},
  CardLable:{},
  CardDiscription:{},
  CardFooter:{}
})