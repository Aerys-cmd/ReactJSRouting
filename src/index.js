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

ReactDOM.render(
	<React.StrictMode>
		<BrowserRouter>
			<Routes>
				<Route path="login" element={<Login />} />
				<Route path="register" element={<Register />} />
				<Route path="admin" element={<Admin />}>
					<Route path="" element={<Dashboard />}></Route>
					<Route path="users" element={<Users />}></Route>
					<Route path="users/:id" element={<UserDetails />}></Route>
				</Route>
				<Route path="" element={<App />}>
					<Route path="home" element={<Home />}></Route>
					<Route path="about" element={<About />}></Route>
				</Route>
			</Routes>
		</BrowserRouter>
	</React.StrictMode>,
	document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
