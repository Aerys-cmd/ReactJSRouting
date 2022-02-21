import { Navigate, useLocation } from 'react-router';
import { AuthService } from '../services/auth.service';

//
export const RoleGuard = ({ children, roles }) => {
	const roleExist = AuthService.IsInRole(roles);
	console.log(roleExist);
	let location = useLocation();

	if (!roleExist) {
		return <Navigate to="/unauthorized" state={{ from: location }} replace />;
	}

	return children;
};
