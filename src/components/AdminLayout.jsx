import React from 'react';
import { Container } from 'react-bootstrap';
import Footer from './Footer';
import Header from './Header';

function AdminLayout({ children }) {
	const menus = [
		{ url: 'users', title: 'Kullanıcılar' },
		{ url: '', title: 'Yönetim Paneli' },
		{ url: 'users/1', title: 'Kullanıcı Detay' },
	];
	const homePageUrl = '/dashboard';
	return (
		<>
			<Header
				menus={menus}
				homePageUrl={'/admin'}
				bg={'dark'}
				variant=""
			></Header>
			<Container>
				<main>{children}</main>
			</Container>
			<Footer>
				<p>Admin Panel Layout</p>
			</Footer>
		</>
	);
}

export default AdminLayout;
