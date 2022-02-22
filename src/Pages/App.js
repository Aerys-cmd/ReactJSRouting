import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import Layout from '../components/Layout';
import { Outlet } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchProduct } from '../store/actions/product.actions';
function App() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(fetchProduct());
	}, []);

	return (
		<div className="App">
			<Layout>
				<Outlet />
			</Layout>
		</div>
	);
}

export default App;
