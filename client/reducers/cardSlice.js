import { createSlice } from '@reduxjs/toolkit';

export const cardSlice = createSlice({
  name: 'Board',
  initialState: {
    current: 0, //index of current card
    deck: [],
    cards: [
      {
        cardId: 1, // card Id from databas
        title: 'Webpack',
        todos: [
          { name: 'run npm init', completed: false },
          {
            name: 'create webpack config file',

            completed: true,
          },
        ],
      },
    ],
  },
  reducers: {
    increment: (state) => {
      state.current += 1;
    },
    addCard: (state, action) => {
      state.cards.push(action.payload);
    },
    complete: (state) => {
      state.completed = true;
    },
    getCards: (state, action) => {
      state.deck = action.payload;
    },
  },
});

export const { increment, addCard, complete, getCards } = cardSlice.actions;

export const selectCard = (state) => state;
export const selectTitle = (state) => state.card.cards[0].title;

export default cardSlice.reducer;
