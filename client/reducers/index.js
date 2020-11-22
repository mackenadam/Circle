import { combineReducers } from 'redux'

import currentCard from './currentCard'
import deck from './deck'
import discard from './discard'
import rules from './rules'

export default combineReducers({
    currentCard,
    deck,
    discard,
    rules
})