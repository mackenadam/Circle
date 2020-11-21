import React from 'react'
import { connect } from 'react-redux'

import { getCard } from '../actions/currentCard'

function Game (props) {
    const currentCard = props.currentCard.cards[0]

    function drawCard () {
        props.dispatch(getCard(props.deck.deck_id))
      }

    return (
        <div className='cardContainer'>
            <h3 className='cardName'>{currentCard.value} of {currentCard.suit}</h3>
            <img className='cardImg' src={currentCard.image} alt='' />
            {
              props.rules.map(obj => {
                if (obj.value == currentCard.value) {
                  return (
                    <div className='cardRules' key={obj.id}>
                      <h4>{obj.rules}</h4>
                      <p>{obj.description}</p>
                    </div>
                  )
                }
              })
            }
            <button className='nextCard' onClick={drawCard}>Draw a card</button>
          </div>
    )
}

function mapStateToProps (globalState) {
    return {
        currentCard: globalState.currentCard,
        deck: globalState.deck,
        rules: globalState.rules
    }
}

export default connect(mapStateToProps)(Game)