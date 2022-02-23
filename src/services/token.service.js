import jwtDecode from 'jwt-decode';

export const TokenService = {};

TokenService.setToken = (accessToken, refreshToken, rememberMe) => {
	var decodedToken = jwtDecode(accessToken);
	if (rememberMe.checked) {
		localStorage.setItem('refresh_token', refreshToken);
		localStorage.setItem('access_token', accessToken);
		localStorage.setItem('username', decodedToken.username);
	} else {
		sessionStorage.setItem('refresh_token', refreshToken);
		sessionStorage.setItem('access_token', accessToken);
		sessionStorage.setItem('username', decodedToken.username);
	}
};
TokenService.clearToken = () => {
	localStorage.removeItem('refresh_token');
	localStorage.removeItem('access_token');
	localStorage.removeItem('username');

	sessionStorage.removeItem('refresh_token');
	sessionStorage.removeItem('access_token');
	sessionStorage.removeItem('username');
};
