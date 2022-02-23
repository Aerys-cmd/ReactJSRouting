export const CartService = {};

CartService.addToCart = () => {
	const cartJsonString = localStorage.getItem('cartState');
	if (cart != undefined) {
		const cartJsonObject = JSON.parse(cartJsonString);

		const existingProduct = state.cartItems.find(
			(x) => x.productId == action.payload.productId
		);
		let cartItems = [];
		if (existingProduct != undefined) {
			existingProduct.quantity += 1;
			let _total = 0;
			for (const item of state.cartItems) {
				_total += Number(item.price) * Number(item.quantity);
			}
			return {
				...state,
				cartItems: [...state.cartItems],
				total: _total,
			};
		} else {
			let cartItems = [action.payload, ...state.cartItems];
			let _total = 0;

			for (const item of cartItems) {
				_total += Number(item.price) * Number(item.quantity);
			}
			return {
				...state,
				cartItems: [...cartItems],
				total: _total,
			};
		}
	}
};
