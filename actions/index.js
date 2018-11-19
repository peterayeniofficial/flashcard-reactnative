export const GET_DECKS = "RECEIVE_DECKS";
export const ADD_DECK = "ADD_DECK";
export const ADD_CARD = "ADD_CARD";

export function getDecks(deckList) {
  return {
    type: RECEIVE_DECKS,
    deckList
  };
}

export function addDeck(title) {
  return {
    type: ADD_DECK,
    title
  };
}

export function addCard(title, question) {
  return {
    type: ADD_CARD,
    title,
    question
  };
}
