import React, { createContext, useState, useEffect } from "react";

export const AuthContext = createContext<any>(null);

export const AuthProvider = ({ children }: any) => {
	const [isAuthenticated, setIsAuthenticated] = useState<boolean>(); // null represents the initial loading state
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		// Simulate an asynchronous check for authentication
		const checkAuthStatus = () => {
			const token: any = localStorage.getItem("token");
			setIsAuthenticated(token ? true : false); // Update the authentication status based on the presence of a token
		};

		checkAuthStatus();
	}, []);

	return (
		<AuthContext.Provider
			value={{ isAuthenticated, setIsAuthenticated, loading, setLoading }}
		>
			{children}
		</AuthContext.Provider>
	);
};
