export const addToCart = (cartItem) => {
	return { type: 'addToCart', payload: cartItem };
};

export const removeFromCart = (cartItem) => {
	return { type: 'removeFromCart', payload: cartItem };
};
export const IncreaseQuantity = (productId) => {
	return { type: 'IncreaseQuantity', payload: { productId } };
};
export const DecreaseQuantity = (productId) => {
	return { type: 'DecreaseQuantity', payload: { productId } };
};
