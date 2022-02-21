import React from 'react';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/auth.service';

function Login() {
	const navigate = useNavigate();
	const login = async () => {
		AuthService.login('mert', '1234', (response, error) => {
			if (error != null) {
				alert(error.message);
			} else {
				navigate(response.url);
			}
		});
	};
	return (
		<div>
			<button onClick={login}>Gönder</button>
		</div>
	);
}

export default Login;
