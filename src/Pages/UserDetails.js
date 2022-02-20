import React from 'react';
import { useParams } from 'react-router';

function UserDetails() {
	const params = useParams();
	console.log('params', params);
	return <div>UserDetails</div>;
}

export default UserDetails;
