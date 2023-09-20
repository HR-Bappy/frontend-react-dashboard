import { useContext } from "react";
import { AuthContext } from "./AuthContext";
import { Route, Redirect } from "react-router-dom";

const ProtectedRoute = ({ component: Component, ...rest }: any) => {
	const { isAuthenticated } = useContext(AuthContext);

	return (
		<Route
			{...rest}
			render={(props: any) =>
				isAuthenticated ? (
					<Component key={props.location.key} {...props} />
				) : (
					<Redirect to="/login" />
				)
			}
		/>
	);
};

export default ProtectedRoute;
