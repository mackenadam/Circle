const initialState = []

function rules(state = initialState, action) {
    switch (action.type) {
        case 'SET_RULES':
            return action.rules
        default:
            return state
    }
}

export default rules