const initialState = []

function cards(state = initialState, action) {
    switch (action.type) {
        case 'SET_DECK':
            return action.deck
        default: return state
    }
}

export default cards