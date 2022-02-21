import jwtDecode from 'jwt-decode';
import { BaseHttpService } from './base.httpservice';
import { TokenService } from './token.service';

export const AuthService = {};

AuthService.isAuthenticated = () => {
	return localStorage.getItem('access_token') ? true : false;
};

AuthService.Username = () => localStorage.getItem('username');

AuthService.login = async (username, password, callback) => {
	const param = {
		username: username,
		password: password,
		grantType: 'password',
	};
	try {
		let response = await BaseHttpService.post(
			'https://localhost:5001/api/tokens',
			param
		);
		if (response.status === 200) {
			TokenService.setToken(
				response.data.accessToken,
				response.data.refreshToken
			);
			callback({ url: '/' }, null);
		} else {
			callback(null, { message: 'Kullanıcı adı veya şifre yanlış' });
		}
	} catch (error) {
		callback(null, { message: 'Sunucuda bir hata oluştu.' });
		console.log('Login Error', error);
	}
};
AuthService.logout = (callback) => {
	TokenService.clearToken();
	callback({ url: '/login' });
};
AuthService.IsInRole = (roleNames) => {
	const accessToken = localStorage.getItem('access_token');
	const decodedToken = jwtDecode(accessToken);

	const roles = decodedToken.role.split(',');

	console.log(roles);

	for (const role of roleNames) {
		if (roles.includes(role)) return true;
	}

	return false;
};
