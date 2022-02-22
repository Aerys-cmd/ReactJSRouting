import axios from 'axios';
import { BaseHttpService } from './base.httpservice';

export const ProductService = {};

ProductService.getAllProducts = async () => {
	// let response = await BaseHttpService.get(
	// 	'https://services.odata.org/OData/OData.svc/Products?$expand=Categories,Supplier&$format=json'
	// );
	let response = await axios.get(
		'https://services.odata.org/OData/OData.svc/Products?$expand=Categories,Supplier&$format=json'
	);

	return response;
};
