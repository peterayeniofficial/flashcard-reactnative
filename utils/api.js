import { AsyncStorage } from "react-native";
import { defaultDecks } from "./_DATA";
import { FLASH_CARD_STORAGE_KEY } from "./_flashcardconstant";

// with concept from Class and
// React Native BluePrint
export function getDecks() {
  return AsyncStorage.getItem(FLASH_CARD_STORAGE_KEY).then(results => {
    if (!results) {
      AsyncStorage.setItem(
        FLASH_CARD_STORAGE_KEY,
        JSON.stringify(defaultDecks)
      );
      return defaultDecks;
    } else {
      return JSON.parse(results);
    }
  });
}

export function getDeck(id) {
  return AsyncStorage.getItem(FLASH_CARD_STORAGE_KEY)
    .then(results => JSON.parse(results))
    .then(results => results[id]);
}

export function saveCardToDeck(title, card) {
  return AsyncStorage.getItem(FLASH_CARD_STORAGE_KEY)
    .then(decks => JSON.parse(decks))
    .then(decks => {
      decks[title].question.push(card);
      AsyncStorage.setItem(FLASH_CARD_STORAGE_KEY, JSON.stringify(decks));
      return decks;
    });
}

export function saveDeckTitle(title) {
  return AsyncStorage.mergeItem(FLASH_CARD_STORAGE_KEY, JSON.stringify(title));
}
