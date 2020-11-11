import request from 'superagent'

// urls for deck of cards API
const docURL = 'https://deckofcardsapi.com/api/deck/'
const newDoc = 'new/shuffle/?deck_count=1'
const drawOne = '/draw/?count=1'

// url to access the DB for access to the rules
const rulesURL = 'http://localhost:3000/api/v1/rules'

export function startNewGame () {
  return request
    .get(docURL + newDoc)
    .then(response => {
      return response.body
    })
}

export function drawOneCard (deckId) {
  return request
  .get(docURL + deckId + drawOne)
  .then(response => {
    return response.body
  })
}

export function accessRules () {
  return request
    .get(rulesURL)
    .then(response => {
      return response.body
    })
}