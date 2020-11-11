import React from 'react'

import { startNewGame, drawOneCard, accessRules } from '../api'

class App extends React.Component {
  state = {
    deck: {},
    currentCard: {},
    rules: []
  }

  newGame = () => {
    startNewGame()
      .then(deck => {
        this.setState({
          deck: deck
        })
        console.log(this.state.deck)
      })
      this.getRules()
  }

  drawCard = () => {
    drawOneCard(this.state.deck.deck_id)
      .then(card => {
        this.setState({
          currentCard: card
        })
        console.log(this.state.currentCard)
      })
  }

  getRules = () => {
    accessRules()
    .then(rules => {
      this.setState({
        rules: rules
      })
      console.log(this.state.rules)
    })
  }

  componentDidMount() {
    this.newGame()
  }
  
  render () {
    return (
      <div className='app'>
        <h1 className='title'>Circle of Death</h1>
        {
        this.state.currentCard.cards && 
          <div className='cardContainer'>
            <h3 className='cardName'>{this.state.currentCard.cards[0].value} of {this.state.currentCard.cards[0].suit}</h3>
            <img className='cardImg' src={this.state.currentCard.cards[0].image} alt='' />
            {
              this.state.rules.map(obj => {
                if (obj.value == this.state.currentCard.cards[0].value) {
                  return (
                    <div className='cardRules' key={obj.id}>
                      <h4>{obj.rules}</h4>
                      <p>{obj.description}</p>
                    </div>
                  )
                }
              })
            }
            <button className='nextCard' onClick={this.drawCard}>Draw a card</button>
          </div>
        }
        {
        !this.state.currentCard.cards &&
          <div className='cardContainer'>
            <h3 className='cardName'>New game</h3>
            <img className='cardImg' src="./img/cardback.png" alt=""/>
            <div className='cardRules'>
              <h4>Get ready</h4>
              <p>Make sure your drinks are topped up, youve had something to eat, and youve been to the toilet. Because the game is about to begin! Please drink Responsibly. If you dont have any Responsibly then feel free to drink whatever you like!</p>
            </div>
            <button className='nextCard' onClick={this.drawCard}>Start the game!</button>
          </div>
          
        }
        
      </div>
    )
  }
}

export default App
