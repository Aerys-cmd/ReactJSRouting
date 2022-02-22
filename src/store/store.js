import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { productReducer } from './reducers/product.reducer';
import { cartReducer } from './reducers/cart.reducer';

export const store = createStore(
	combineReducers({ productState: productReducer }, { cartState: cartReducer }),
	applyMiddleware(thunk)
);
