import React from 'react';
import { Badge, ListGroup, Offcanvas } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { toggleMenu } from '../store/actions/sidemenu.actions';

function CartMenu() {
	const cartState = useSelector((store) => store.cartState);
	const dispatch = useDispatch();
	const sideMenuState = useSelector((store) => store.sideMenuState);
	const handleClose = () => {
		dispatch(toggleMenu(true)); //sideMenuState
	};
	return (
		<Offcanvas
			placement={'end'}
			show={sideMenuState.visible}
			onHide={handleClose}
		>
			<Offcanvas.Header closeButton>
				<Offcanvas.Title>Sepetim</Offcanvas.Title>
			</Offcanvas.Header>
			<Offcanvas.Body>
				<ListGroup as="ol" numbered>
					{cartState.cartItems.map((cartItem) => {
						return (
							<ListGroup.Item
								as="li"
								className="d-flex justify-content-between align-items-start"
								key={cartItem.productId}
							>
								<div className="ms-2 me-auto">
									<div className="fw-bold">{cartItem.name}</div>
									{cartItem.quantity * cartItem.price}₺
								</div>
								<Badge bg="primary" pill>
									{cartItem.quantity}
								</Badge>
							</ListGroup.Item>
						);
					})}
				</ListGroup>
			</Offcanvas.Body>
		</Offcanvas>
	);
}

export default CartMenu;
