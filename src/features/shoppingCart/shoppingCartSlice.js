import { createSlice } from '@reduxjs/toolkit';

export const shoppingCartSlice = createSlice({
  name: 'shoppingCart',
  initialState: JSON.parse(localStorage.getItem('shoppingCart')) || [],
  reducers: {
    addItem: (state, action) => {
     state.push(action.payload); 
     localStorage.setItem('shoppingCart', JSON.stringify(state));
    },
    removeItem: (state, action) => {
      let index = state.findIndex(item=> item.id === action.payload.id);
      state.splice(index, 1);
      localStorage.setItem('shoppingCart', JSON.stringify(state));
    },
  },
});

export const { addItem, removeItem } = shoppingCartSlice.actions;

export const selectShoppingCart = state => state.shoppingCart;

export default shoppingCartSlice.reducer;
