# External APIs - Choose your own adventure!

## Circle

### What's this then?
This project was created as part of the 'Consuming external APIs' exercise during my time at Enspiral Dev Academy. It was made for a friend who loves to play this game on the weekend but never has a deck of cards handy. It uses an external Deck of Cards API to deal and shuffle a 52 card deck of cards. The order of cards is saved and cards are moved to a discard pile as they are used. Each card has a rule assigned to it. The rules are stored in a SQLite DB and accessed through an internal API call.

### Setup

After cloning down the repo be sure to install npm dependencies, run the database seeds, and start the dev server using the code below.

```
npm install # to install dependencies
npm run knex migrate:latest # to make sure the db uses the latest tables
npm run knex seed:run # to populate the database with seed data
npm run dev # to start the dev server
```

You can find the server running on [http://localhost:3000](http://localhost:3000).


