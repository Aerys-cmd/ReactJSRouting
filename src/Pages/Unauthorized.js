import React from 'react';
import { Link } from 'react-router-dom';

function Unauthorized() {
	return (
		<>
			<div>Unauthorized</div>
			<Link to="/">Anasayfaya dön</Link>
		</>
	);
}

export default Unauthorized;
