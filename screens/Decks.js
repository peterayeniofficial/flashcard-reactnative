import React, { Component } from "react";
import {
  StyleSheet,
  FlatList,
  View,
  Platform,
  TouchableOpacity
} from "react-native";
import Deck from "./Deck";

class Decks extends Component {
  render() {
    return (
      <view>
        <Deck />
      </view>
    );
  }
}

export default Decks;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#FFF"
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
});
