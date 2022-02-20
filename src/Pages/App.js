import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Alert } from 'react-bootstrap';
import Layout from '../components/Layout';
import { Outlet } from 'react-router-dom';

function App() {
	return (
		<div className="App">
			<Layout>
				<Outlet />
			</Layout>
		</div>
	);
}

export default App;
