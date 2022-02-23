import React from 'react';
import { Button, Card, Col, Container, Form, Row } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import { AuthService } from '../services/auth.service';

function Login() {
	const navigate = useNavigate();
	const login = async (event) => {
		event.preventDefault();
		AuthService.login(
			event.target.Username.value,
			event.target.Password.value,
			event.target.RememberMe,
			(response, error) => {
				if (error != null) {
					alert(error.message);
				} else {
					navigate(response.url);
				}
			}
		);
	};
	return (
		<>
			<Row style={{ marginBottom: '10em' }}></Row>
			<Row>
				<Card className="text-center">
					<Card.Header>Login</Card.Header>
					<Card.Body>
						<Card.Title>Welcome Back!</Card.Title>
						<Container>
							<Row
								className="justify-content-md-center"
								style={{ textAlign: 'left' }}
							>
								<Col md="8">
									<Form onSubmit={login}>
										<Form.Group className="mb-3" controlId="formBasicEmail">
											<Form.Label>Username</Form.Label>
											<Form.Control
												name="Username"
												type="text"
												placeholder="Enter username"
											/>
										</Form.Group>

										<Form.Group className="mb-3" controlId="formBasicPassword">
											<Form.Label>Password</Form.Label>
											<Form.Control
												name="Password"
												type="password"
												placeholder="Password"
											/>
										</Form.Group>
										<Form.Group className="mb-3" controlId="formBasicCheckbox">
											<input type="checkbox" name="RememberMe"></input>
										</Form.Group>
										<Button variant="primary" type="submit">
											Login
										</Button>
									</Form>
								</Col>
							</Row>
						</Container>
					</Card.Body>
					<Card.Footer className="text-muted">Aerys-cmd</Card.Footer>
				</Card>
			</Row>
		</>
	);
}

export default Login;
