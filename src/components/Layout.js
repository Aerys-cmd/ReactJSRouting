import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

// children layout componentler için özel isim niteliğindedir.

function Layout({ children }) {
	const menus = [
		{
			url: '/home',
			title: 'Ana Sayfa',
		},
		{
			url: '/about',
			title: 'Hakkımızda',
		},
		{
			url: '/products',
			title: 'Ürünlerimiz',
		},
	];
	const menuUrl = '/';
	return (
		<>
			<Header
				homePageUrl={menuUrl}
				menus={menus}
				bg={'light'}
				variant={'light'}
			/>
			<Container fluid>
				<main>{children}</main>
			</Container>
			<Footer />
		</>
	);
}

export default Layout;
