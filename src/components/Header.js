import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

// bgColor component içerine dışarıdan gönderilen değerlere props ismini veririz.
// props html elementin attribute karşılık gelir. <a href="wwww.a.com"></a>

// { bg, variant } props denk gelir. props da özel bir keyword. componente gönderilen geçirilen değerlere karşılık gelir.

function Header({ bg, variant, menus = [], homePageUrl }) {
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
