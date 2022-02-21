import React from 'react';
import { useNavigate } from 'react-router';
import { Button, Container, Nav, Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthService } from '../services/auth.service';

// bgColor component içerine dışarıdan gönderilen değerlere props ismini veririz.
// props html elementin attribute karşılık gelir. <a href="wwww.a.com"></a>

// { bg, variant } props denk gelir. props da özel bir keyword. componente gönderilen geçirilen değerlere karşılık gelir.

function Header({ bg, variant, menus = [], homePageUrl }) {
	const username = AuthService.Username();
	const isAuthenticated = AuthService.isAuthenticated();
	const navigator = useNavigate();
	const logout = () => {
		AuthService.logout((response) => {
			navigator(response.url);
		});
	};
	return (
		<>
			<Navbar bg={bg} variant={variant}>
				<Container>
					<Navbar.Brand>
						<Link className="nav-item nav-link" to={homePageUrl}>
							Ana Sayfa
						</Link>
					</Navbar.Brand>
					<Nav className="me-auto">
						{menus.map((item) => {
							return (
								<Link
									className="nav-item nav-link"
									key={item?.url}
									to={item?.url}
								>
									{item?.title}
								</Link>
							);
						})}
						{isAuthenticated && (
							<>
								<Nav.Item className="nav-item nav-link">
									<Nav.Link>{username}</Nav.Link>
								</Nav.Item>
								<Button onClick={logout}>Çıkış Yap</Button>
							</>
						)}
						{!isAuthenticated && (
							<NavItem>
								<Nav.Link to="/login"></Nav.Link>
							</NavItem>
						)}
					</Nav>
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
};
