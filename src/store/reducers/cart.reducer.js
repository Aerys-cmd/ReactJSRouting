import { CartService } from '../../services/cart.service';

const cartInitialState = CartService.getCart();

export const cartReducer = (state = cartInitialState, action) => {
	switch (action.type) {
		case 'addToCart':
			// logic cart service içerisine koyuldu
			const cart = CartService.addToCart(action.payload);

			return {
				...state, // state üzerindeki sadece products propertysini güncelliyoruz.
				cartItems: [...cart.cartItems],
				total: cart.total,
			};
		case 'clearCart':
			CartService.clearCart(); // localstorage temizleme

			return {
				...state,
				total: 0,
				cartItems: action.payload,
			};
		case 'removeFromCart':
			const _cart = CartService.remove(action.payload.id);

			return {
				...state,
				total: _cart.total,
				cartItems: _cart.cartItems,
			};
		case 'IncreaseQuantity':
			const increasedCart = CartService.increase(action.payload.id);
			return {
				...state,
				cartItems: increasedCart.cartItems,
				total: increasedCart.total,
			};
		case 'DecreaseQuantity':
			const decreasedCart = CartService.decreaseQuantity(action.payload.id);
			return {
				...state,
				cartItems: decreasedCart.cartItems,
				total: decreasedCart.total,
			};
		default:
			return state;
	}
};
