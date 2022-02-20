import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useIsRTL } from 'react-bootstrap/esm/ThemeProvider';

function Register() {
	const [users, setUsers] = useState([]);

	useEffect(async () => {
		let response = await axios.get(
			'https://jsonplaceholder.typicode.com/users'
		);
		let data = await response.data;
		setUsers([...data]);
	}, []);
	return (
		<div>
			<table>
				<thead>
					<th>Username</th>
					<th>Email</th>
				</thead>
				<tbody>
					{users.map((item) => {
						return (
							<tr>
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

export default Register;
