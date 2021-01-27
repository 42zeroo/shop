import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import categoryReducer from '../features/category/categorySlice';
import shoppingCartReducer from '../features/shoppingCart/shoppingCartSlice';

export default configureStore({
  reducer: {
    counter: counterReducer,
    category: categoryReducer,
    shoppingCart: shoppingCartReducer,
  },
});
