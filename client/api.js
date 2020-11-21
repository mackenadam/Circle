import request from 'superagent'

const docURL = 'https://deckofcardsapi.com/api/deck/'
const newDoc = 'new/shuffle/?deck_count=1'
const drawOne = '/draw/?count=1'

const rulesURL = 'http://localhost:3000/api/v1/rules'

export function startNewDeckAPI () {
  return request
    .get(docURL + newDoc)
    .then(res => {
      return res.body
    })
}

export function drawOneCardAPI (deckId) {
  return request
  .get(docURL + deckId + drawOne)
  .then(res => {
    return res.body
  })
}

export function accessRulesAPI () {
  return request
    .get(rulesURL)
    .then(res => {
      return res.body
    })
}