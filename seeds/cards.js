
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cards').del()
    .then(function () {
      // Inserts seed entries
      return knex('cards').insert([
        {
          id: 1,
          value: 'ACE',
          rules: 'Waterfall!',
          description: 'Cheers, and then everyone starts to drink. The player who drew this card can stop whenever they want. When they do the player directly to their right can also stop and so on until the last person in the circle can stop.'
        },
        {
          id: 2,
          value: '2',
          rules: 'Take two',
          description: 'If the card is red then take two drinks yourself. If it is black then nominate two drinks.'
        },
        {
          id: 3,
          value: '3',
          rules: 'Take three',
          description: 'If the card is red then take three drinks yourself. If it is black then nominate three drinks.'
        },
        {
          id: 4,
          value: '4',
          rules: 'Take four',
          description: 'If the card is red then take four drinks yourself. If it is black then nominate four drinks.'
        },
        {
          id: 5,
          value: '5',
          rules: 'Make a rule',
          description: 'Make a new rule, amend an existing rule, or take a rule out of play.'
        },
        {
          id: 6,
          value: '6',
          rules: 'One frog',
          description: 'Each player takes turns to say "one frog", "jumped in", "the lake", "ka-splash". Once the sentence has been completed, the next round increments i.e "two frogs", "two frogs", "jumped in", "jumped in", "the lake", "the lake" and so on. The first person who messes up the sentence has to take a drink.'
        },
        {
          id: 7,
          value: '7',
          rules: 'Sevens game',
          description: 'Players take turns to count. You cant say any number with 7 in it or that is a multiple of seven and instead have to clap. The first player to mess up the count or say a number which is a multiple of, or contains, 7 has to take a drink.'
        },
        {
          id: 8,
          value: '8',
          rules: 'Toilet card',
          description: 'This is a toilet card! From here on out players cant leave the circle to go toilet unless they have this card. This card can be traded.'
        },
        {
          id: 9,
          value: '9',
          rules: 'Bust a rhyme',
          description: 'The player who drew this card says a word or sentence. Players then take turns rhyming a word or sentence. The first person to say something that doesnt rhyme or who cant come up with anything within 5 seconds has to drink.'
        },
        {
          id: 10,
          value: '10',
          rules: 'A ship came into the harbour',
          description: 'The player who drew this card says "A ship came into the harbour carrying a shipload of" and then names a type of cargo i.e beers. Players then take turns naming an item that fits this description i.e Heineken. The first player who cant come up with something within 5 seconds has to drink.'
        },
        {
          id: 11,
          value: 'JACK',
          rules: 'Thumbmaster',
          description: 'Whoever holds this card can place their thumb on the edge of the table whenever they like. When they do everybody else has to do the same. The last player to have their thumb on the edge of the table has to drink. When the next Jack is drawn this player loses their thumbmaster status.'
        },
        {
          id: 12,
          value: 'QUEEN',
          rules: 'Questionmaster',
          description: 'Whoever holds this card is the Question Master. When they ask a question if another player answers then that player has to drink. If the Question Master asks a question and another player replies "Fuck you", then the Question Master has to drink. When the next Queen is drawn this player loses their Question Master status.'
        },
        {
          id: 13,
          value: 'KING',
          rules: 'King',
          description: 'Everyone cheers, the player who drew this card has to finish their vessel, and all other players take a drink.'
        }
      ]);
    });
};
