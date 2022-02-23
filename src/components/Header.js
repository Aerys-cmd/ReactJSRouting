import React from 'react';
import {
	Badge,
	ListGroup,
	Offcanvas,
	Button,
	ButtonGroup,
	Container,
	Navbar,
	Nav,
	NavDropdown,
} from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { clearCart, removeFromCart } from '../store/actions/cart.actions';
import { toggleMenu } from '../store/actions/sidemenu.actions';
import { AuthService } from '../services/auth.service';
function Header({ bg, variant, menus, homePageUrl, isAdmin = false }) {
	const userName = AuthService.Username();
	const isAuthenticated = AuthService.isAuthenticated();
	const navigate = useNavigate();

	const cart = useSelector((store) => store.cartState.cartItems);
	const cartTotal = useSelector((store) => store.cartState.total);
	const sideMenuState = useSelector((store) => store.sideMenuState);
	const dispatch = useDispatch();

	const logout = async () => {
		AuthService.logout((response) => {
			navigate(response.url);
		});
	};

	return (
		<>
			<Navbar bg={bg} variant={variant}>
				<Container>
					<Navbar.Brand>
						<Link className="nav-item nav-link" to={homePageUrl}>
							{' '}
							Nbuy Oglen
						</Link>
					</Navbar.Brand>
					<Nav className="me-auto">
						{menus.map((item) => {
							return (
								<Link
									key={item.url}
									className="nav-item nav-link"
									to={item.url}
								>
									{item?.title}{' '}
								</Link>
							);
						})}
					</Nav>
					{isAuthenticated && (
						<div className="ms-auto">
							{/* <Nav.Link
								onClick={() => {
									dispatch(toggle(sideMenuState.visible));
								}}
								style={{ color: 'indianred', justifyContent: 'center' }}
							>
								Sepet Toplam :{cartTotal.toFixed(2)}
							</Nav.Link> */}

							<Nav style={{ color: 'indianred' }}>
								<Navbar.Collapse>
									<Nav>
										<NavDropdown title={userName} menuVariant="light">
											<NavDropdown.Item onClick={logout}>
												Oturumu Kapat
											</NavDropdown.Item>
										</NavDropdown>
									</Nav>
								</Navbar.Collapse>

								{!isAdmin && (
									<Nav.Link
										onClick={() => {
											dispatch(toggleMenu(sideMenuState.visible));
										}}
										style={{ color: 'indianred', justifyContent: 'center' }}
									>
										<i className="bi bi-cart"></i> {cartTotal.toFixed(2)}
									</Nav.Link>
								)}
							</Nav>
						</div>
					)}
					{!isAuthenticated && (
						<Nav style={{ color: 'indianred' }} className="ms-auto">
							<Link to="/login">Oturum Aç</Link>
						</Nav>
					)}
				</Container>
			</Navbar>
		</>
	);
}

// defaultProps ile varsayılan bu componente set edilen değerler

export default Header;

Header.defaultProps = {
	bg: 'light',
	variant: 'light',
	menus: [
		{ title: 'Anasayfa', url: 'home' },
		{ title: 'Hakkımızda', url: 'about' },
	],
	homePageUrl: '/home',
};
