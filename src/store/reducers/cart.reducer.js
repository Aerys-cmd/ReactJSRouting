const cartInitialState = {
	total: 0,
	cartItems: [],
};

export const cartReducer = (state = cartInitialState, action) => {
	switch (action.type) {
		case 'addToCart':
			const existingProduct = state.cartItems.find(
				(x) => x.id == action.payload.productId
			);
			console.log(state.cartItems);
			let cartItems = [];
			if (existingProduct != null) {
				existingProduct.quantity += 1;
				let _total = state.cartItems.sum((x) => x.price);
				return {
					...state,
					cartItems: [...state.cartItems],
					total: _total,
				};
			} else {
				let cartItems = [...action.payload, state.cartItems];

				let _total = cartItems.sum((x) => x.price);
				return {
					...state,
					cartItems: [...cartItems],
					total: _total,
				};
			}

		default:
			break;
	}

	return state;
};
