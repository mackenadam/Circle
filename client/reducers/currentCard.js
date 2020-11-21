const { bindActionCreators } = require("redux");

const initialState = []

function currentCard(state = initialState, action) {
    switch (action.type) {
        case 'SET_CARD':
            return action.currentCard
        default:
            return state
    }
}

export default currentCard