import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Pages/App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Admin from './Pages/Admin';
import Home from './Pages/Home';
import About from './Pages/About';
import Dashboard from './Pages/Dashboard';
import Users from './Pages/Users';
import UserDetails from './Pages/UserDetails';
import Login from './Pages/Login';
import Register from './Pages/Register';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';
import Unauthorized from './Pages/Unauthorized';
import { Provider } from 'react-redux';
import { store } from './store/store';
import Product from './Pages/Product';
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<BrowserRouter>
				<Routes>
					<Route path="login" element={<Login />} />
					<Route path="unauthorized" element={<Unauthorized />} />
					<Route path="register" element={<Register />} />
					<Route
						path="admin"
						element={
							<AuthGuard>
								<Admin />
							</AuthGuard>
						}
					>
						<Route path="" element={<Dashboard />}></Route>
						<Route
							path="users"
							element={
								<RoleGuard roles={['manager']}>
									<Users />
								</RoleGuard>
							}
						></Route>
						<Route path="users/:id" element={<UserDetails />}></Route>
					</Route>
					<Route path="" element={<App />}>
						<Route path="home" element={<Home />}></Route>
						<Route
							path="about"
							element={
								<AuthGuard>
									<About />
								</AuthGuard>
							}
						></Route>
						<Route path="products" element={<Product />}></Route>
					</Route>
				</Routes>
			</BrowserRouter>
		</Provider>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
