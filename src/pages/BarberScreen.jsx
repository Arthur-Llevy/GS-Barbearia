import React, { useEffect, useRef } from 'react';
import { Menu, Footer } from '../components/Exports';
import { BarberScreenContainer } from '../components/Exports';

export function BarberScreen(){

	let welcomeText = useRef()

	useEffect(() => {
		fetch('https://gs-barbearia-api.onrender.com/dadosBarbeiro', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json',
				'token': sessionStorage.getItem('token')
			}
		}).
			then(response => response.json()).
			then(data => {
				welcomeText.current.innerHTML = `Seja bem-vindo ${data.name}!`
			})

	}, [])

	return(
		<>
			<Menu />
			<BarberScreenContainer>
				<p ref={welcomeText}>Seja bem-vindo BARBEIRO!</p> 
				<button><a href="cadastrarCliente">Cadastrar Cliente</a></button>
				<button><a href="adicionarCorte">Adicionar Corte a um cliente</a></button>
				<button><a href="procurarCliente">Procurar Cliente</a></button>
			</BarberScreenContainer>
			<Footer />
		</>
	);
};