import jwtDecode from 'jwt-decode';

export const TokenService = {};

TokenService.setToken = (accessToken, refreshToken) => {
	localStorage.setItem('refresh_token', refreshToken);
	localStorage.setItem('access_token', accessToken);

	var decodedToken = jwtDecode(accessToken);

	localStorage.setItem('username', decodedToken.username);
};
TokenService.clearToken = () => {
	localStorage.removeItem('refresh_token');
	localStorage.removeItem('access_token');
	localStorage.removeItem('username');
};
