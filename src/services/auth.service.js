import jwtDecode from 'jwt-decode';
import { BaseHttpService } from './base.httpservice';
import { TokenService } from './token.service';

export const AuthService = {};

AuthService.isAuthenticated = () => {
	if (
		localStorage.getItem('access_token') == undefined &&
		sessionStorage.getItem('access_token') == undefined
	)
		return false;

	return true;
};

AuthService.Username = () => {
	return localStorage.getItem('username') == undefined
		? sessionStorage.getItem('username')
		: localStorage.getItem('username');
};

AuthService.login = async (username, password, rememberMe, callback) => {
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
				response.data.refreshToken,
				rememberMe
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
