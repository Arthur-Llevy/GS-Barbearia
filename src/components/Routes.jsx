import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { 
	HomePage,
	BarberLogin,
	ClientLogin,
	RegisterClient,
	BarberScreen,
	AddCutToClient,
	FindClient,
	ClientScreen
	 } from './Exports';
import React from 'react';

export function Rts(){

	const token = sessionStorage.getItem('token');	

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
			</Routes>
		</BrowserRouter>
	);	
};
