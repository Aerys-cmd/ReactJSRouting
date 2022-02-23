import { ProductService } from '../../services/product.service';

export const fetchProduct = () => async (dispatch) => {
	let response = await ProductService.getAllProducts();
	dispatch({ type: 'getProducts', payload: response.data.value });
};
