import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";

class Deck extends Component {
  render() {
    return (
      <View>
        <Text style={[styles.text, styles.header]}>React</Text>
        <Text style={styles.text}>2 cards</Text>
      </View>
    );
  }
}

export default Deck;

const styles = StyleSheet.create({
  header: {
    fontWeight: "bold"
  },
  text: {
    alignAlign: "center",
    fontSize: 18
  }
});
