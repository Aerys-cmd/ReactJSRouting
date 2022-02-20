import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminLayout from '../components/AdminLayout';

function Admin() {
	return (
		<div>
			<AdminLayout>
				<Outlet />
			</AdminLayout>
		</div>
	);
}

export default Admin;
