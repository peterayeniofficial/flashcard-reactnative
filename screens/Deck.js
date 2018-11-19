import React, { Component } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { getDefaultDecks } from "../utils/api";
import { connect } from "react-redux";
import { pluralized } from "../utils/helpers";
import { white, black, lightPurp, purple } from "../utils/colors";

class Deck extends Component {
  render() {
    const title = this.props.navigation.state.params.deck.title;
    let questions = this.props.navigation.state.params.deck.questions;

    if (this.props.decks[title].questions !== []) {
      questions = this.props.decks[title].questions;
    }
    return (
      <View style={styles.container}>
        <Text style={[styles.text, styles.header]}>{title}</Text>
        <Text style={styles.text}>
          {questions.length} {pluralized(questions)}
        </Text>
        <TouchableOpacity
          style={styles.addCardBtn}
          onPress={() =>
            this.props.navigation.navigate("AddCard", { id: title })
          }
        >
          <Text style={styles.addCardText}>Add Card</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.quizBtn}
          onPress={() =>
            this.navigation.navigate("Quiz", {
              id: title,
              questions: questions
            })
          }
        >
          <Text style={styles.quizBtnText}>Start Quiz</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: white,
    alignItems: "center",
    justifyContent: "center"
  },
  header: {
    fontWeight: "bold"
  },
  text: {
    alignSelf: "center",
    fontSize: 18
  },
  quizBtn: {
    backgroundColor: purple,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
  addCardBtn: {
    backgroundColor: white,
    borderColor: purple,
    borderWidth: 1,
    paddingLeft: 30,
    paddingRight: 30,
    height: 45,
    borderRadius: 2,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 5,
    marginTop: 10,
    marginBottom: 10
  },
  quizBtnText: {
    color: white,
    fontSize: 20
  },
  addCardText: {
    color: purple,
    fontSize: 20
  }
});

function mapStateToProps(decks) {
  const title = {};
  return {
    decks
  };
}
export default connect(mapStateToProps)(Deck);
