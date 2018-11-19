import React, { Component } from "react";
import { connect } from "react-redux";
import { getDefaultDecks } from "../utils/api";
import { getDecks } from "../actions";
import { white, black, lightPurp } from "../utils/colors";

import {
  StyleSheet,
  ScrollView,
  View,
  Platform,
  TouchableOpacity
} from "react-native";
import Deck from "./Deck";

class Decks extends Component {
  componentDidMount() {
    const { dispatch } = this.props;
    getDefaultDecks().then(decks => dispatch(getDecks(decks)));
  }
  render() {
    const { decks } = this.props;
    return (
      <ScrollView style={styles.container}>
        {Object.keys(decks).map(deck => (
          <TouchableOpacity
            key={deck}
            onPress={() =>
              this.props.navigation.navigate("Deck", { deck: decks[deck] })
            }
          >
            <Deck deck={decks[deck]} />
          </TouchableOpacity>
        ))}
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white
  },
  text: {
    alignSelf: "center",
    marginBottom: 7
  },
  mb: {
    marginBottom: 15
  }
});

function mapStateToProps(decks) {
  return {
    decks
  };
}

export default connect(mapStateToProps)(Decks);
