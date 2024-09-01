import React, { Component } from 'react';
import { Text, StyleSheet, View, Image, ActivityIndicator } from 'react-native';
import axios from 'axios';

export default class CharacterCard extends Component {
  state = {
    character: null,
    loading: true,
    error: null,
  };

  async componentDidMount() {
    try {
      const response = await axios.get('https://rickandmortyapi.com/api/character/1'); // Fetch data for a specific character (e.g., Rick Sanchez)
      this.setState({ character: response.data, loading: false });
    } catch (error) {
      this.setState({ error, loading: false });
    }
  }

  render() {
    const { character, loading, error } = this.state;

    if (loading) {
      return (
        <View style={styles.container}>
          <ActivityIndicator size="large" color="#0000ff" />
        </View>
      );
    }

    if (error) {
      return (
        <View style={styles.container}>
          <Text>Error: {error.message}</Text>
        </View>
      );
    }

    if (!character) {
      return null;
    }

    return (
      <View style={styles.container}>
        <Text style={styles.headingText}>Character Details</Text>
        <View style={[styles.card, styles.cardElevated]}>
          <Image
            source={{ uri: character.image }}
            style={styles.cardImage}
          />
          <View style={styles.cardBody}>
            <Text style={styles.CardTitle}>{character.name}</Text>
            <Text style={styles.CardLabel}>Status: {character.status}</Text>
            <Text style={styles.CardDescription}>Species: {character.species}</Text>
            <Text style={styles.CardFooter}>Last updated: {new Date(character.created).toLocaleDateString()}</Text>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    padding: 16,
  },
  headingText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
  },
  card: {
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
    marginTop: 8,
    padding: 4,
    overflow: 'hidden',
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
    width: '100%',
  },
  cardBody: {
    padding: 8,
  },
  CardTitle: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  CardLabel: {
    fontSize: 16,
    color: '#555',
  },
  CardDescription: {
    fontSize: 14,
    color: '#777',
  },
  CardFooter: {
    fontSize: 12,
    color: '#999',
  },
});