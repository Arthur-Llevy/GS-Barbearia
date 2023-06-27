import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { 
	HomePage,
	BarberLogin,
	ClientLogin,
	RegisterClient,
	BarberScreen,
	AddCutToClient,
	FindClient,
	ClientScreen,
	BarberNotifications,
	ClientNotifications,
	ForgotPassword
	} from './Exports';
import React from 'react';

export const Rts = () => {

	const token = localStorage.getItem('token');		

	return(
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<HomePage />} />
				<Route path="loginBarbeiro" element={<BarberLogin />} />
				<Route path="loginCliente" element={<ClientLogin />} />
				<Route path="cadastrarCliente" element={<RegisterClient />} />
				<Route path="barbeiro" element={token !== null ? <BarberScreen /> : <Navigate to="/loginBarbeiro" /> } />
				<Route path="adicionarCorte" element={<AddCutToClient />} />
				<Route path="procurarCliente" element={<FindClient />} />
				<Route path="cliente" element={token !== null ? <ClientScreen /> : <Navigate to="/loginCliente" />}/>
				<Route path="/barbeiro/notificacoes" element={token !== null ? <BarberNotifications /> : <Navigate to="/loginBarbeiro" />} />
				<Route path="/cliente/notificacoes" element={token !== null ? <ClientNotifications /> : <Navigate to="/loginCliente" />} />
				<Route path="/cliente/esqueceuSenha" element={<ForgotPassword />} />
			</Routes>
		</BrowserRouter>
	);	
};
