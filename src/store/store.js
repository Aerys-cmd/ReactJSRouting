import { applyMiddleware, combineReducers, createStore } from 'redux';
import thunk from 'redux-thunk';
import { cartReducer } from './reducers/cart.reducer';
import { productReducer } from './reducers/product.reducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { sideMenuReducer } from './reducers/sidemenu.reducer';

export const store = createStore(
	combineReducers({
		productState: productReducer,
		cartState: cartReducer,
		sideMenuState: sideMenuReducer,
	}),
	composeWithDevTools(applyMiddleware(thunk))
);
