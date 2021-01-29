import { createSlice } from '@reduxjs/toolkit';

export const productSlice = createSlice({
  name: 'product',
  initialState: null,
  reducers: {
    setProduct: (state, action) => state = action.payload,
    removeSelectedProduct: state => state=null,
  },
});

export const { setProduct, removeSelectedProduct } = productSlice.actions;

export const selectProduct = state => state.product;

export default productSlice.reducer;
