import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { 
	HomePage,
	BarberLogin,
	ClientLogin
	 } from './Exports';
import React from 'react';

export function Rts(){
	return(
		<BrowserRouter>
			<Routes>
				<Route path="*" element={<HomePage />} />
				<Route path="loginBarbeiro" element={<BarberLogin />} />
				<Route path="loginCliente" element={<ClientLogin />} />
			</Routes>
		</BrowserRouter>
	);	
};