const cartInitialState = {
	total: 0,
	cartItems: [],
};

export const cartReducer = (state = cartInitialState, action) => {
	switch (action.type) {
		case 'addToCart':
			break;
		default:
			return state;
	}
};
