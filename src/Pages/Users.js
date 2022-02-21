import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { BaseHttpService } from '../services/base.httpservice';

function Users() {
	const [users, setUsers] = useState([]);

	useEffect(async () => {
		let response = await BaseHttpService.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		let data = await response.data;
		setUsers([...data]);
	}, []);
	return (
		<div>
			<table className="table table-bordered">
				<thead>
					<tr>
						<th>Username</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{users.map((item) => {
						return (
							<tr key={item.username}>
								<td>{item.username}</td>
								<td>{item.email}</td>
							</tr>
						);
					})}
				</tbody>
			</table>
		</div>
	);
}

export default Users;
