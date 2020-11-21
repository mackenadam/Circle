import { startNewDeckAPI } from '../api'

export function saveDeckToState(deck) {
    return {
        type: 'SET_DECK',
        deck: deck
    }
}

export function getDeck() {
    return (dispatch) => {
        startNewDeckAPI()
            .then(deckObj => {
                dispatch(saveDeckToState(deckObj))
            })
    }
}