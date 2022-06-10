const assert = require('assert');
const Game = require('../models/Game');

/**

 * Deal as many cards as possible to the players provided.
 * @param {Player[]} players List of Players to be dealt cards
 * @param {Deck} deck The Deck of Cards to be used
 * @return {Game} comprised of the Players and their individual Cards
 * along with any undealt Cards that would remain
 */
const dealAll = (players, deck) => {
    assert(players != null, 'Players cannot be null');
    assert(deck != null, 'Deck cannot be null');

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input values
    return new Game(players, deck.getCards());
};

/**

 * Deal the specified number of cards to the players provided.
 * @param {PLayer[]} players List of Players to be dealt cards
 * @param {Deck} deck The Deck of Cards to be used
 * @param {number} numberOfCardsPerPlayer The number of cards to deal to each player.
 * @return {Game} comprised of the Players and their individual Cards
 * along with any undealt Cards that would remain
 */
const dealSome = (players, deck, numberOfCardsPerPlayer) => {
    assert(players != null, 'players cannot be null');
    assert(deck != null, 'deck cannot be null');
    assert(numberOfCardsPerPlayer != null, 'numberOfCardsPerPlayer cannot be null');

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input values
    return new Game(players, deck.getCards());
};

/**

 * Shuffle/randomize the provided Deck.
 * @param {Deck} deck The Deck to shuffle
 * @return {Deck} the shuffled deck
 */
const shuffleDeck = (deck) => {
    assert(deck != null, 'Deck cannot be null');

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input deck without being shuffled
    return deck;
};

/**

 * Shuffle/randomize the provided list of Cards.
 * @param {Card[]} cards List of Cards to shuffle
 * @return {Card[]} the shuffled cards
 */
const shuffleCards = (cards) => {
    assert(cards != null, 'cards cannot be null');

    // TODO: this is where the work goes
    // TODO: this is NOT the correct solution, it is simply returning the input deck without being shuffled
    return cards;
};

module.exports = { dealAll, dealSome, shuffleDeck, shuffleCards };
