const initialState = []

function discard (state = initialState, action) {
    switch (action.type) {
        case 'DISCARD_CARD':
            return [...state, action.currentCard]
        default:
            return state
    }
}

export default discard