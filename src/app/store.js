import { configureStore } from '@reduxjs/toolkit';
import categoryReducer from '../features/category/categorySlice';
import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice';
import productReducer from '../features/product/productSlice';

export default configureStore({
  reducer: {
    category: categoryReducer,
    shoppingCart: shoppingCartReducer,
    product: productReducer,
  },
});
