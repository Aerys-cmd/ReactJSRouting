const productInitialState = {
	products: [],
	selectedProduct: null,
};

export const productReducer = (state = productInitialState, action) => {
	switch (action.type) {
		case 'getProducts':
			return {
				...state,
				products: [...action.payload],
			};
		default:
			break;
	}

	return state;
};
