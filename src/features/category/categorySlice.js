import { createSlice } from '@reduxjs/toolkit';

const now = new Date()
const initialCategory = localStorage.getItem('category') ?
    JSON.parse(localStorage.getItem('category')).expires > now.getTime() ?
        JSON.parse(localStorage.getItem('category')) 
        : {value: ""} 
    : {value:""};


export const categorySlice = createSlice({
  name: 'category',
  initialState: {
    value: (initialCategory.value ),
    expires: (now.getTime() + 3600000),
  },
  reducers: {
    changeCategory: (state, action) => {
      state.value = action.payload;
      localStorage.setItem('category', JSON.stringify(state));
    },
  },
});
export const { changeCategory } = categorySlice.actions;

export const selectCategory = state => state.category.value;

export default categorySlice.reducer;
