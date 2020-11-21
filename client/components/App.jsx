import React from 'react'
import { connect } from 'react-redux'

import { getDeck } from '../actions/deck'
import { getRules } from '../actions/rules'

import Game from './Game'
import NewGame from './NewGame'

class App extends React.Component {

  componentDidMount () {
    this.props.dispatch(getDeck())
    this.props.dispatch(getRules())
  }
  
  render () {
    return (
      <div className='app'>
        <h1 className='title'>Circle of Death</h1>
        { this.props.currentCard.cards && <Game /> }
        { !this.props.currentCard.cards && <NewGame /> }
      </div>
    )
  }
}

function mapStateToProps(globalState) {
  return {
    currentCard: globalState.currentCard
  }
}

export default connect(mapStateToProps)(App)
