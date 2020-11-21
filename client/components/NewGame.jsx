import React from 'react'
import { connect } from 'react-redux'

import { getCard } from '../actions/currentCard'

function NewGame (props) {

    function drawCard () {
      props.dispatch(getCard(props.deck.deck_id))
    }

    return (
        <div className='cardContainer'>
            <h3 className='cardName'>New game</h3>
            <img className='cardImg' src="./img/cardback.png" alt=""/>
            <div className='cardRules'>
              <h4>Get ready</h4>
              <p>Make sure your drinks are topped up, youve had something to eat, and youve been to the toilet. Because the game is about to begin! Please drink Responsibly. If you dont have any Responsibly then feel free to drink whatever you like!</p>
            </div>
            <button className='nextCard' onClick={drawCard}>Start the game!</button>
          </div>
    )
}

function mapStateToProps (globalState) {
  return {
    deck: globalState.deck
  }
}

export default connect(mapStateToProps)(NewGame)