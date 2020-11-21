import { drawOneCardAPI } from '../api'

export function saveCardToState(currentCard) {
    return {
        type: 'SET_CARD',
        currentCard: currentCard
    }
}

export function getCard(deckID) {
    return (dispatch) => {
        drawOneCardAPI(deckID)
            .then(cardObj => {
                dispatch(saveCardToState(cardObj))
            })
    }
}