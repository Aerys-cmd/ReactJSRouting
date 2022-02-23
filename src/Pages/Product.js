import React from 'react';
import { Badge, Button, Card, Col, Row } from 'react-bootstrap';
import { useSelector, useDispatch } from 'react-redux';
import { addToCart } from '../store/actions/cart.actions';

function Product() {
	const dispatch = useDispatch();
	const products = useSelector((state) => state.productState.products);
	const onAddToCart = (item) => {
		const cartItem = {
			quantity: 1,
			productId: item.ID,
			name: item.Name,
			price: item.Price,
		};

		dispatch(addToCart(cartItem));
	};
	const cartItems = useSelector((state) => state.cartState.cartItems);
	return (
		<Row>
			{products.map((item) => {
				return (
					<Col key={item.ID}>
						<Card style={{ width: '18rem' }}>
							{/* <Card.Img variant="top" src="holder.js/100px180" /> */}
							<Card.Body>
								<Card.Title>
									{item.Name}
									<Badge>
										{cartItems.find((x) => x.productId == item.ID) !=
										undefined ? (
											cartItems.find((x) => x.productId == item.ID).quantity
										) : (
											<></>
										)}
									</Badge>
								</Card.Title>
								<Card.Text>{item.Description}</Card.Text>
								<Button onClick={() => onAddToCart(item)} variant="primary">
									Sepete Ekle
								</Button>
							</Card.Body>
						</Card>
					</Col>
				);
			})}
		</Row>
	);
}

export default Product;
