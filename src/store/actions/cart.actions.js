export const addToCart = (cartItem) => {
	return { type: 'addToCart', payload: cartItem };
};

export const clearCart = () => {
	return { type: 'clearCart', payload: [] };
};

export const removeFromCart = (id) => {
	return { type: 'removeFromCart', payload: { id: id } };
};

export const IncreaseQuantity = (productId) => {
	return { type: 'IncreaseQuantity', payload: { id: productId } };
};
export const DecreaseQuantity = (productId) => {
	return { type: 'DecreaseQuantity', payload: { id: productId } };
};
